import React, { useEffect, useState } from 'react';
import { fetchWasteStatus } from '../api';
import { Pie } from 'react-chartjs-2';
import './Waste.css';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Waste = () => {
  const [wasteData, setWasteData] = useState([]);
  const [viewMode, setViewMode] = useState('progress'); // 'progress' | 'chart'
  const [chartType, setChartType] = useState('type'); // 'type' | 'area'
  const [scheduledBins, setScheduledBins] = useState([]);

  useEffect(() => {
    const getWaste = async () => {
      try {
        const res = await fetchWasteStatus();
        setWasteData(res.data);
      } catch (err) {
        console.error('Error fetching waste data:', err);
      }
    };
    getWaste();
  }, []);

  const getStatus = (level) => {
    if (level >= 80) return 'Critical';
    if (level >= 50) return 'Warning';
    return 'Normal';
  };

  const getStatusColor = (status) => {
    if (status === 'Critical') return '#e74c3c';
    if (status === 'Warning') return '#f1c40f';
    return '#2ecc71';
  };

  const groupByField = (field) => {
    const groups = {};
    wasteData.forEach((bin) => {
      const key = bin[field];
      groups[key] = (groups[key] || 0) + bin.level;
    });
    return groups;
  };

  const getChartData = () => {
    const grouped = groupByField(chartType);
    return {
      labels: Object.keys(grouped),
      datasets: [
        {
          label: 'Waste Fill Level',
          data: Object.values(grouped),
          backgroundColor: [
            '#e67e22', '#3498db', '#2ecc71', '#9b59b6',
            '#f1c40f', '#e84393', '#6c5ce7', '#fd79a8'
          ],
          borderWidth: 1
        }
      ]
    };
  };

  const estimateDaysToFull = (level) => {
    const fillPerDay = 5; // mock value
    const remaining = 100 - level;
    return Math.ceil(remaining / fillPerDay);
  };

  return (
    <div className="waste-container">
      <h2>🗑️ Smart Waste Management</h2>

      <div className="view-toggle">
        <button
          className={viewMode === 'progress' ? 'active' : ''}
          onClick={() => setViewMode('progress')}
        >
          Progress View
        </button>
        <button
          className={viewMode === 'chart' ? 'active' : ''}
          onClick={() => setViewMode('chart')}
        >
          Chart View
        </button>
      </div>

      {viewMode === 'progress' ? (
        <div className="card-grid">
          {wasteData.map((bin) => {
            const status = getStatus(bin.level);
            const daysToFull = estimateDaysToFull(bin.level);
            return (
              <div key={bin.id} className="waste-card">
                <h3>{bin.type} - {bin.area}</h3>
                <p><strong>Level:</strong> {bin.level}%</p>
                <div className="fill-bar-bg">
                  <div
                    className="fill-bar"
                    style={{
                      width: `${bin.level}%`,
                      backgroundColor: getStatusColor(status)
                    }}
                  />
                </div>
                <p className="status" style={{ color: getStatusColor(status) }}>
                  {status}
                </p>
                <p className="prediction">🧠 Expected full in {daysToFull} days</p>

                {bin.level > 80 && (
                  scheduledBins.includes(bin.id) ? (
                    <>
                      <div className="pickup-confirmed">✅ Pickup Scheduled</div>
                      <div className="pickup-info">
                        📦 A collection request has been scheduled. The team will be notified.
                      </div>
                    </>
                  ) : (
                    <button
                      className="pickup-btn"
                      onClick={() => setScheduledBins([...scheduledBins, bin.id])}
                    >
                      🧹 Schedule Pickup
                    </button>
                  )
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="chart-toggle">
            <button
              className={chartType === 'type' ? 'active' : ''}
              onClick={() => setChartType('type')}
            >
              By Type
            </button>
            <button
              className={chartType === 'area' ? 'active' : ''}
              onClick={() => setChartType('area')}
            >
              By Area
            </button>
          </div>

          <div className="chart-container">
            <Pie data={getChartData()} />
          </div>
        </>
      )}
    </div>
  );
};

export default Waste;
