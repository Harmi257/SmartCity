// src/redux/actions/transportActions.js
import axios from 'axios';

export const fetchTransportSchedules = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TRANSPORT_REQUEST' });
  try {
    const response = await axios.get('http://localhost:8080/api/transport');
    dispatch({ type: 'FETCH_TRANSPORT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TRANSPORT_FAILURE', payload: error.message });
  }
};
