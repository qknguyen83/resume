import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useTheme } from '../ThemeContext';
import NavBar from './NavBar';
import Footer from './Footer';
import StarCanvas from './StarCanvas';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  body: {
    flexGrow: 1,
    marginTop: '15px',
  },
};

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <Container sx={styles.container} disableGutters maxWidth={false}>
      {theme === 'dark' && <StarCanvas />}
      <NavBar />
      <Box sx={styles.body}>{children}</Box>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
