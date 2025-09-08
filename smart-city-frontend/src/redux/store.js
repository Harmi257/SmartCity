// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import trafficReducer from './reducers/trafficSlice';
import disasterReducer from './reducers/disasterSlice';
import transportReducer from './reducers/transportReducer';
import utilityReducer from './reducers/utilityReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    traffic: trafficReducer,
    disaster: disasterReducer,
    utility: utilityReducer,
    transport: transportReducer,
    auth: authReducer
  },
});

export default store;
