import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ThemeContext from './ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <Router>
        <App />
      </Router>
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById('root')
);
