import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Login from './containers/Login';
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const options = {
  timeout: 5000,
  position: "bottom center"
};

ReactDOM.render(
  <Router>
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
