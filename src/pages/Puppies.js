import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import PuppyLightbox from '../components/PuppyLightbox';
import puppyData from '../data/puppyData';

const Puppies = () => {
  console.log("Puppy Data:", puppyData); // Debugging line

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Available Puppies
      </Typography>
      <Grid container spacing={4}>
        {puppyData.map((puppy) => (
          <Grid item key={puppy.id} xs={12} sm={6} md={4}>
            <Card>
              <PuppyLightbox images={puppy.images} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {puppy.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Breed: {puppy.breed}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {puppy.age}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Puppies;
