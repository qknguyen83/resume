import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import avatar from '../../public/images/avatar.jpg';

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginBottom: '3px',
  },
  avatar: {
    height: '120px',
    width: '120px',
    borderRadius: '50%',
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Avatar = () => {
  return (
    <motion.div
      style={styles.box}
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
    >
      <Box>
        <Typography sx={styles.name} variant='h4'>
          Nguyen Quang Khai
        </Typography>
        <Typography>Radio engineer turned web developer</Typography>
      </Box>
      <Box sx={styles.avatar} component='img' src={avatar} />
    </motion.div>
  );
};

export default Avatar;
