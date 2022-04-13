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
              <a style={{ color: '#3F00FF' }} href='https://fullstackopen.com/en/'>
                Full stack open
              </a>{' '}
              is a computer science course offered by the University of Helsinki, Finland. The
              course covers a wide range of topics regarding modern Javascript-based web
              development, including React, Redux, Webpack, Typescript, Node.js, Express.js, Jest,
              Cypress... The course was taken online and the exercises were submitted via a{' '}
              <a style={{ color: '#3F00FF' }} href='https://github.com/qknguyen83/Full-stack-open'>
                GitHub repository
              </a>
              .
            </Typography>
          </Section>
          <Section title='Pathfinding visualizer'>
            <Typography align='justify'>
              A simple{' '}
              <a
                style={{ color: '#3F00FF' }}
                href='https://qknguyen83.github.io/pathfinding-visualizer/'
              >
                pathfinding visualizer
              </a>{' '}
              application built with vanilla Javascript, HTML and CSS. The application implements 04
              pathfinding algorithms, including: A* algorithm, Dijkstra algorithm, breadth first
              search, and depth first search. Maze generation is done by running randomized depth
              first search, also known as the recursive backtracking algorithm.
            </Typography>
          </Section>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Projects;
