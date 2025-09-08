import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DisasterDetails.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#C71585"];

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const DisasterDetails = () => {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem("jwtToken");

    axios
      .get("http://localhost:5000/api/disaster", {
        headers: {
          Authorization: `Bearer ${token}`, // Send JWT token in the request header
        },
      })
      .then((res) => setDisasters(res.data))
      .catch((err) => console.error("Error fetching data", err));
  }, []);

  const riskChartData = [
    {
      name: "High Temperature",
      value: disasters.filter((item) => item.temperature > 35).length,
    },
    {
      name: "High Wind Speed",
      value: disasters.filter((item) => item.wind_speed > 50).length,
    },
    {
      name: "High Rainfall",
      value: disasters.filter((item) => item.rainfall > 100).length,
    },
    {
      name: "Poor Air Quality",
      value: disasters.filter((item) => item.air_quality_index > 120).length,
    },
  ];

  return (
    <div className="disaster-container">
      <h2>Recent Disaster Risk Metrics</h2>

      <table className="disaster-table">
        <thead>
          <tr>
            <th>Area</th>
            <th>Temp (°C)</th>
            <th>Humidity (%)</th>
            <th>Seismic</th>
            <th>Rainfall (mm)</th>
            <th>Wind (km/h)</th>
            <th>AQI</th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {disasters.map((row, index) => (
            <tr key={index}>
              <td>{row.area}</td>
              <td>{row.temperature}</td>
              <td>{row.humidity}</td>
              <td>{row.seismic_activity}</td>
              <td>{row.rainfall}</td>
              <td>{row.wind_speed}</td>
              <td>{row.air_quality_index}</td>
              <td>{row.recommendation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="visualizations">
        <div className="pie-container">
          <h3>Disaster Risk Distribution</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={riskChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {riskChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      <div className="map-section">
        <h3>Disaster Map View</h3>
        <MapContainer center={[11.93, 79.83]} zoom={8} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {disasters.map((item, index) => (
            item.latitude && item.longitude && (
              <Marker key={index} position={[item.latitude, item.longitude]} icon={defaultIcon}>
                <Popup>
                  <b>{item.area}</b><br />
                  Temp: {item.temperature}°C<br />
                  Wind: {item.wind_speed} km/h<br />
                  Rainfall: {item.rainfall} mm<br />
                  AQI: {item.air_quality_index}
                </Popup>
              </Marker>
            )
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default DisasterDetails;
