import {
    UTILITY_SUBMIT_SUCCESS,
    UTILITY_SUBMIT_FAILURE,
    RESET_UTILITY_FORM
  } from '../actions/utilityActions';
  
  const initialState = {
    submittedData: null,
    error: null,
  };
  
  const utilityReducer = (state = initialState, action) => {
    switch (action.type) {
      case UTILITY_SUBMIT_SUCCESS:
        return {
          ...state,
          submittedData: action.payload,
          error: null,
        };
  
      case UTILITY_SUBMIT_FAILURE:
        return {
          ...state,
          submittedData: null,
          error: action.payload,
        };
  
      case RESET_UTILITY_FORM:
        return {
          ...state,
          submittedData: null,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export default utilityReducer;
  