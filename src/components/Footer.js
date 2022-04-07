import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '20px',
  },
};

const Footer = () => {
  return (
    <Box sx={styles.box}>
      <Typography>
        {new Date().getFullYear()} &copy; Nguyen Quang Khai
      </Typography>
    </Box>
  );
};

export default Footer;
