// src/components/Register.js

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateUsername = (username) => /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(username);

  const handleRegister = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    else if (!validateUsername(username)) newErrors.username = 'Username must contain letters and numbers, with at least one letter';

    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Enter a valid email';

    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const user = { username, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/login');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f0f4f8',
        padding: '20px',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: '40px',
          maxWidth: '400px',
          width: '100%',
          bgcolor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" sx={{ color: '#6a11cb', textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
          Register
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
          fullWidth
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          fullWidth
          sx={{ marginBottom: '30px' }}
        />
        <Button
          variant="contained"
          onClick={handleRegister}
          fullWidth
          sx={{
            backgroundColor: '#6a11cb',
            '&:hover': { backgroundColor: '#5a0fb0' },
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '10px 0',
          }}
        >
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
};

export default Register;
