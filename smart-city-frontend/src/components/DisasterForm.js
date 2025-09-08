import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitDisasterData } from '../redux/actions/disasterActions'; // ✅ Correct path
import './DisasterForm.css';

const DisasterForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.disaster);

  const [formData, setFormData] = useState({
    area: '',
    temperature: '',
    humidity: '',
    seismic_activity: '',
    rainfall: '',
    wind_speed: '',
    air_quality_index: '',
    recommendation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, error: submitError } = await dispatch(submitDisasterData(formData));

    if (!success) {
      alert('Submission failed: ' + submitError);
    } else {
      alert('Disaster data submitted successfully!');
      setFormData({
        area: '',
        temperature: '',
        humidity: '',
        seismic_activity: '',
        rainfall: '',
        wind_speed: '',
        air_quality_index: '',
        recommendation: ''
      });
    }
  };

  return (
    <form className="disaster-form" onSubmit={handleSubmit}>
      <h2>Disaster Risk Data Entry</h2>

      <label>Area:</label>
      <input type="text" name="area" value={formData.area} onChange={handleChange} required />

      <label>Temperature (°C):</label>
      <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} required />

      <label>Humidity (%):</label>
      <input type="number" name="humidity" value={formData.humidity} onChange={handleChange} required />

      <label>Seismic Activity (Richter scale):</label>
      <input type="number" name="seismic_activity" value={formData.seismic_activity} onChange={handleChange} required />

      <label>Rainfall (mm):</label>
      <input type="number" name="rainfall" value={formData.rainfall} onChange={handleChange} required />

      <label>Wind Speed (km/h):</label>
      <input type="number" name="wind_speed" value={formData.wind_speed} onChange={handleChange} required />

      <label>Air Quality Index:</label>
      <input type="number" name="air_quality_index" value={formData.air_quality_index} onChange={handleChange} />

      <label>Recommendation:</label>
      <textarea name="recommendation" value={formData.recommendation} onChange={handleChange} rows="4" />

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default DisasterForm;
