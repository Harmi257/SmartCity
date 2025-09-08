import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUtilityForm, resetUtilityForm } from '../redux/actions/utilityActions';
import './UtilityForm.css';


const UtilityForm = () => {
  const dispatch = useDispatch();
  const { submittedData, error } = useSelector((state) => state.utility);

  const [formData, setFormData] = useState({
    water: '',
    electricity: '',
    area: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUtilityForm(formData));
    setFormData({ water: '', electricity: '', area: '' });
  };

  const handleReset = () => {
    setFormData({ water: '', electricity: '', area: '' });
    dispatch(resetUtilityForm());
  };

  return (
    <div className="utility-form">
      <h2>Enter Utility Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Water Usage (Liters):</label>
          <input
            type="number"
            name="water"
            value={formData.water}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Electricity Usage (kWh):</label>
          <input
            type="number"
            name="electricity"
            value={formData.electricity}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Area:</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {submittedData && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          ✅ Data submitted successfully for area: <strong>{submittedData.area}</strong>
        </div>
      )}
      {error && (
        <div style={{ marginTop: '1rem', color: 'red' }}>
          ❌ {error}
        </div>
      )}
    </div>
  );
};

export default UtilityForm;
