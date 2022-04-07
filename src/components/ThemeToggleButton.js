import React from 'react';
import { useTheme, useThemeToggle } from '../ThemeContext';
import IconButton from '@mui/material/IconButton';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';

const ThemeToggleButton = () => {
  const theme = useTheme();
  const themeToggle = useThemeToggle();
  return (
    <IconButton onClick={() => themeToggle()}>
      {theme === 'light' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggleButton;
