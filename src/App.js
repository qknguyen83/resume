import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Projects from './pages/Projects';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const location = useLocation();
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Layout>
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path='/' element={<Profile />} exact />
            <Route path='/projects' element={<Projects />} exact />
          </Routes>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
