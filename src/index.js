import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ThemeContext from './ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById('root')
);
