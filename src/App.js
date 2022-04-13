import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from './ThemeContext';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

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
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Navigate to='/profile' />} exact />
          <Route path='/profile' element={<Profile />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
