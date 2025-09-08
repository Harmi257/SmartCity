import axios from 'axios';

export const SET_UTILITY_FORM = 'SET_UTILITY_FORM';
export const RESET_UTILITY_FORM = 'RESET_UTILITY_FORM';
export const UTILITY_SUBMIT_SUCCESS = 'UTILITY_SUBMIT_SUCCESS';
export const UTILITY_SUBMIT_FAILURE = 'UTILITY_SUBMIT_FAILURE';

// Action to submit form data to backend and store response
export const setUtilityForm = (formData) => async (dispatch) => {
  try {
    // Get token from local storage
    const token = localStorage.getItem('jwtToken');
    
    // Make sure token exists
    if (!token) {
      throw new Error('Token not found');
    }

    const response = await axios.post('http://localhost:5000/api/utility', formData, {
      headers: {
        Authorization: `Bearer ${token}`,  // Adding token to Authorization header
      },
    });

    dispatch({
      type: UTILITY_SUBMIT_SUCCESS,
      payload: response.data, // Saved data from DB
    });
  } catch (error) {
    dispatch({
      type: UTILITY_SUBMIT_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Reset form state
export const resetUtilityForm = () => ({
  type: RESET_UTILITY_FORM,
});
