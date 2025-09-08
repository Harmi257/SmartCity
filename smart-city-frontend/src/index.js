import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provide Redux store to the app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Measure performance in your app
reportWebVitals();
