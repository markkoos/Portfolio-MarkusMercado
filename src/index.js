import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./styles/style.css";
import reportWebVitals from './reportWebVitals';

console.log(`using ${style}`);

// render() method renders app component to the DOM
ReactDOM.render(<App />,
  // renders App to the default root element
  document.getElementById('root')
);

reportWebVitals();
