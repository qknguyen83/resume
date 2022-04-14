import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Section from '../components/Section';

const Projects = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} sm={10} md={8} lg={5}>
        <Container>
          <Section title='Full stack open'>
            <Typography align='justify'>
              <a
                style={{ color: '#3F00FF' }}
                href='https://fullstackopen.com/en/'
                target='_blank'
                rel='noreferrer'
              >
                Full stack open
              </a>{' '}
              is a computer science course offered by the University of Helsinki, Finland. The
              course covers a wide range of topics regarding modern JavaScript-based web
              development, including React, Redux, Webpack, TypeScript, Node.js, Express.js, Jest,
              Cypress... The course was taken online and the exercises were submitted via a{' '}
              <a
                style={{ color: '#3F00FF' }}
                href='https://github.com/qknguyen83/Full-stack-open'
                target='_blank'
                rel='noreferrer'
              >
                GitHub repository
              </a>
              .
            </Typography>
          </Section>
          <Section title='Resume website'>
            <Typography align='justify'>
              A{' '}
              <a
                style={{ color: '#3F00FF' }}
                href='https://qknguyen83.github.io/resume/'
                target='_blank'
                rel='noreferrer'
              >
                website
              </a>{' '}
              built with React, Material UI, Framer Motion, and Three JS for showcasing resume
              online. Instead of using the create-react-app template, the project was built from the
              ground up and bundled with Webpack.
            </Typography>
          </Section>
          <Section title='Pathfinding visualizer'>
            <Typography align='justify'>
              A simple{' '}
              <a
                style={{ color: '#3F00FF' }}
                href='https://qknguyen83.github.io/pathfinding-visualizer/'
                target='_blank'
                rel='noreferrer'
              >
                pathfinding visualizer
              </a>{' '}
              application built with vanilla JavaScript, HTML and CSS. The application implemented
              04 pathfinding algorithms, including: A* algorithm, Dijkstra algorithm, breadth first
              search, and depth first search. Maze generation was done by running randomized depth
              first search, also known as the recursive backtracking algorithm.
            </Typography>
          </Section>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Projects;
