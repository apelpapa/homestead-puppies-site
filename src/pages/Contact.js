import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          type="email"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
