import { createSlice } from '@reduxjs/toolkit';
import {
  SUBMIT_DISASTER_REQUEST,
  SUBMIT_DISASTER_SUCCESS,
  SUBMIT_DISASTER_FAILURE
} from '../actions/disasterActions';

const initialState = {
  loading: false,
  disasterData: null,
  error: null
};

const disasterSlice = createSlice({
  name: 'disaster',
  initialState,
  reducers: {}, // Removed empty object export to fix ESLint warning
  extraReducers: (builder) => {
    builder
      .addCase(SUBMIT_DISASTER_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SUBMIT_DISASTER_SUCCESS, (state, action) => {
        state.loading = false;
        state.disasterData = action.payload;
        state.error = null;
      })
      .addCase(SUBMIT_DISASTER_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default disasterSlice.reducer;
