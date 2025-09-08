// reducers/transportReducer.js
const initialState = {
  schedules: [],
  loading: false,
  error: null,
};

const transportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRANSPORT_SUCCESS':
      return {
        ...state,
        schedules: action.payload,
        loading: false,
      };
    case 'FETCH_TRANSPORT_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'FETCH_TRANSPORT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default transportReducer;
