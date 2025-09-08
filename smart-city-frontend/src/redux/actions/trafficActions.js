// src/redux/actions/trafficActions.js
import axios from 'axios';

export const getTrafficByArea = (area) => async (dispatch) => {
  try {
    dispatch({ type: 'traffic/fetchStart' });

    // Get token from localStorage
    const token = localStorage.getItem('jwtToken'); // Retrieve token from localStorage
    if (!token) {
      throw new Error('Authentication token not found');
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,  // Send the token in the Authorization header
      },
    };

    // Fetch traffic data by area with token authentication
    const response = await axios.get(`http://localhost:5000/api/traffic/${area}`, config);

    // Dispatch success action with fetched data
    dispatch({
      type: 'traffic/fetchSuccess',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching traffic data:', error);
    dispatch({
      type: 'traffic/fetchFailure',
      payload: error.response?.data?.message || error.message,
    });
  }
};
