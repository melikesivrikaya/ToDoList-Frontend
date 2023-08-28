import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ContextProvider} from './context/Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ContextProvider>
  <App></App>
 </ContextProvider>
);
