// src/components/Login.js

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Checkbox, FormControlLabel, Paper } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem('auth', true);
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f3f6f9',
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
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: '#6a11cb', fontWeight: 'bold', mb: 3 }}>
          Login
        </Typography>
        
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={!!error}
          sx={{ marginBottom: '20px' }}
        />
        
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          error={!!error}
          helperText={error}
          sx={{ marginBottom: '10px' }}
        />

        <FormControlLabel
          control={<Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} />}
          label="Show Password"
          sx={{ marginBottom: '20px', color: '#6a11cb' }}
        />
        
        <Button
          variant="contained"
          onClick={handleLogin}
          fullWidth
          sx={{
            backgroundColor: '#6a11cb',
            '&:hover': { backgroundColor: '#5a0fb0' },
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '10px 0',
            marginBottom: '15px',
          }}
        >
          Login
        </Button>

        <Typography variant="body2">
          Don’t have an account?{' '}
          <Link to="/register" style={{ color: '#6a11cb', textDecoration: 'none', fontWeight: 'bold' }}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
