import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Homestead Puppies
      </Typography>
      <Typography variant="body1" paragraph>
        At Homestead Puppies, we believe in breeding happy, healthy puppies. Our journey started with a love for dogs, and we’ve been dedicated to raising well-tempered, loving puppies ever since.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Story
      </Typography>
      <Typography variant="body1" paragraph>
        [Your story here]
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Team
      </Typography>
      <Typography variant="body1" paragraph>
        [Introduce your team members]
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Breeds
      </Typography>
      <Typography variant="body1" paragraph>
        [Information about the breeds you specialize in]
      </Typography>
    </Container>
  );
};

export default About;
