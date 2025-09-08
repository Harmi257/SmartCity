import axios from 'axios';

export const SUBMIT_DISASTER_REQUEST = 'SUBMIT_DISASTER_REQUEST';
export const SUBMIT_DISASTER_SUCCESS = 'SUBMIT_DISASTER_SUCCESS';
export const SUBMIT_DISASTER_FAILURE = 'SUBMIT_DISASTER_FAILURE';

export const submitDisasterData = (formData) => async (dispatch) => {
  dispatch({ type: SUBMIT_DISASTER_REQUEST });

  try {
    // Retrieve the JWT token from localStorage
    const token = localStorage.getItem('jwtToken');

    // Make the API request with the token in the Authorization header
    const response = await axios.post(
      'http://localhost:5000/api/disaster',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send JWT token in the request header
        },
      }
    );

    dispatch({
      type: SUBMIT_DISASTER_SUCCESS,
      payload: response.data,
    });

    return { success: true };
  } catch (error) {
    dispatch({
      type: SUBMIT_DISASTER_FAILURE,
      payload: error.response?.data?.message || error.message,
    });

    return { success: false, error: error.response?.data?.message || error.message };
  }
};
