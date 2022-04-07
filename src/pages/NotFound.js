import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '50vh',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const Projects = () => {
  const navigate = useNavigate();
  return (
    <Container sx={styles.container}>
      <Typography align='center' variant='h4'>
        404
      </Typography>
      <Typography align='center'>Page not found</Typography>
      <Box sx={styles.box}>
        <Button color='inherit' onClick={() => navigate('/resume/profile')}>
          Return
        </Button>
      </Box>
    </Container>
  );
};

export default Projects;
