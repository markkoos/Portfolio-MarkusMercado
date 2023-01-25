import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/style.css";
import reportWebVitals from './reportWebVitals';

// render() method renders app component to the DOM
ReactDOM.render(<App />,
  // renders App to the default root element
  document.getElementById('root')
);

reportWebVitals();
