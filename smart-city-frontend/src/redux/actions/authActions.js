// src/redux/actions/authActions.js

export const loginSuccess = (user, token, role) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: { user, token, role },
  };
};

export const registerSuccess = (user) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: user,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
