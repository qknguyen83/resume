import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const themeContext = React.createContext();
const themeToggleContext = React.createContext();

export const useTheme = () => {
  return useContext(themeContext);
};

export const useThemeToggle = () => {
  return useContext(themeToggleContext);
};

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const themeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <themeContext.Provider value={theme}>
      <themeToggleContext.Provider value={themeToggle}>
        {children}
      </themeToggleContext.Provider>
    </themeContext.Provider>
  );
};

ThemeContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
