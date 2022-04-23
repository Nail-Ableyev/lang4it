import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import App from './App';
import {ContextProvider} from "./Context";

ReactDOM.render(
  <React.StrictMode>
      <ContextProvider>
          <Router>
              <App/>
          </Router>
      </ContextProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

