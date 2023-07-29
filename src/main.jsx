import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './store.jsx';
import { Provider } from 'react-redux';
import { appProvider } from './useContext/userContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <appProvider>
        <App />
      </appProvider>
    </Provider>
  </React.StrictMode>
);














// import store from './store.jsx'
// import { Provider } from 'react-redux'

// // store.subscribe(() => console.log(store.getState()))    