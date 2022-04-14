import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ThemeToggleButton from './ThemeToggleButton';

const styles = {
  container: {
    display: 'flex',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  button: {
    textTransform: 'none',
    fontSize: '16px',
  },
};

const NavBar = () => {
  const navigate = useNavigate();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar position='sticky' color={trigger ? 'default' : 'transparent'} elevation={0}>
      <Toolbar variant='dense'>
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={10} md={8} lg={5}>
            <Container sx={styles.container} disableGutters>
              <Box sx={styles.box}>
                <Button sx={styles.button} color='inherit' onClick={() => navigate('/profile')}>
                  Profile
                </Button>
                <Button sx={styles.button} color='inherit' onClick={() => navigate('/projects')}>
                  Projects
                </Button>
                <Button
                  sx={styles.button}
                  color='inherit'
                  target='_blank'
                  href='https://drive.google.com/file/d/12Pq6O-0gnit7G4ddv29fZJpAxTr9l2KI/view?usp=sharing'
                >
                  Resume
                </Button>
                <Button
                  sx={styles.button}
                  color='inherit'
                  target='_blank'
                  href='https://github.com/qknguyen83/resume'
                >
                  Source
                </Button>
              </Box>
              <ThemeToggleButton />
            </Container>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
