import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AvatarSection from '../components/AvatarSection';
import Section from '../components/Section';

const styles = {
  listItem: {
    display: 'list-item',
    textAlign: 'justify',
    marginLeft: '1em',
  },
  columnView: {
    display: 'flex',
    flexDirection: 'row',
  },
  yearColumn: {
    width: '30%',
  },
  detailsColumn: {
    width: '70%',
  },
};

const Profile = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} sm={10} md={8} lg={5}>
        <Container>
          <AvatarSection />
          <Section title='Career Objective'>
            <Typography align='justify'>
              Self-taught web developer looking for a frontend position at a young, dynamic,
              innovative company where I can learn and grow as a professional web developer, apply
              my knowledge about web technologies to support colleague as well as company growth and
              success{' '}
            </Typography>
          </Section>
          <Section title='Key Qualifications'>
            <Typography sx={styles.listItem}>
              Solid data structure and algorithms foundation
            </Typography>
            <Typography sx={styles.listItem}>
              Good understanding of modern JavaScript-based web development, including React, Redux,
              Webpack, TypeScript, Node, Express, Jest, Cypess, GraphQL, and MongoDB
            </Typography>
            <Typography sx={styles.listItem}>
              Familiar with CI/CD deployment and application containerization with Docker
            </Typography>
            <Typography sx={styles.listItem}>
              Full professional proficiency at English (IELTS 8.0 - 2019)
            </Typography>
          </Section>
          <Section title='Professional experience'>
            <Box sx={styles.columnView}>
              <Box sx={styles.yearColumn}>
                <Typography>04/2021 - 03/2022</Typography>
              </Box>
              <Box sx={styles.detailsColumn}>
                <Typography align='justify'>Radio engineer at Viettel Networks</Typography>
              </Box>
            </Box>
          </Section>
          <Section title='Education'>
            <Box sx={styles.columnView}>
              <Box sx={styles.yearColumn}>
                <Typography>08/2017 - 06/2021</Typography>
              </Box>
              <Box sx={styles.detailsColumn}>
                <Typography align='justify'>
                  Studied and graduated from the Electronics and Communications Engineering
                  Technology Program at the University of Engineering and Technology - Vietnam
                  National University, Hanoi
                </Typography>
                <Typography align='justify'>GPA 3.71/4.00</Typography>
              </Box>
            </Box>
          </Section>
          <Section title='Interests'>
            <Typography align='justify'>
              Music, movie, book, history, geography, technology, language, travel
            </Typography>
          </Section>
          <Section title='Contact'>
            <Typography align='justify'>
              Email:{' '}
              <a style={{ color: '#3F00FF' }} href='mailto:khainguyenwrk@gmail.com'>
                khainguyenwrk@gmail.com
              </a>
            </Typography>
          </Section>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Profile;
