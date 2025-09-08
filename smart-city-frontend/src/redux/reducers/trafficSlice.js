// src/redux/reducers/trafficSlice.js

const initialState = {
    trafficData: null,
    loading: false,
    error: null,
  };
  
  const trafficReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'traffic/fetchStart':
        return { ...state, loading: true, error: null };
      
      case 'traffic/fetchSuccess':
        return { ...state, loading: false, trafficData: action.payload };
      
      case 'traffic/fetchFailure':
        return { ...state, loading: false, error: action.payload };
      
      default:
        return state;
    }
  };
  
  export default trafficReducer;
  