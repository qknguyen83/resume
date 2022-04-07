import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const styles = {
  box: {
    width: '100%',
    marginTop: '20px',
  },
  typography: {
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationThickness: '3px',
    marginBottom: '5px',
  },
};

const sectionVariants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Section = ({ title, children }) => {
  return (
    <motion.div
      style={styles.box}
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
    >
      <Typography sx={styles.typography} variant='h6'>
        {title}
      </Typography>
      {children}
    </motion.div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
