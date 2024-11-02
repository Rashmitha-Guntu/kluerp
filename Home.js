// src/components/Home.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f0f4f8' }}>
      {/* Top Bar */}
      <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #6a11cb, #2575fc)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
            KLU ERP
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: '220px',
            bgcolor: 'linear-gradient(180deg, #f0f4f8, #d9e2ec)',
            height: '100%',
            padding: '20px',
            boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          {['Courses', 'Faculty', 'Timetable', 'Students', 'Library'].map((item) => (
            <Button
              key={item}
              fullWidth
              variant="outlined"
              component={Link}
              to={`/${item.toLowerCase()}`}
              sx={{
                marginBottom: '10px',
                color: '#6a11cb',
                borderColor: '#6a11cb',
                '&:hover': {
                  backgroundColor: '#6a11cb',
                  color: '#ffffff',
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Main Content */}
        <Box sx={{ padding: '30px', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper elevation={3} sx={{ padding: '40px', maxWidth: '600px', width: '100%', bgcolor: '#ffffff', borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#6a11cb' }}>
              Welcome, {user?.username || 'Guest'}!
            </Typography>
            <Typography variant="body1" sx={{ color: '#4f5d75' }}>
              This is your dashboard where you can manage courses, faculty, timetable, and more.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
