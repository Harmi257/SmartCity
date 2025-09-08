// src/redux/reducers/authReducer.js

const initialState = {
  user: null,
  token: null,
  role: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
        isAuthenticated: true,
      };

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT':
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
