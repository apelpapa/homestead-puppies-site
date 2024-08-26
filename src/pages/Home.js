import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Homestead Puppies
      </Typography>
      <Typography variant="h5" paragraph>
        We breed happy, healthy puppies to find their forever homes.
      </Typography>
      <Button variant="contained" color="primary">
        View Available Puppies
      </Button>
    </Container>
  );
};

export default Home;
