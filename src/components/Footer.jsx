import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Dark theme for the footer
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // Dark background color
    },
    text: {
      primary: '#fff', // White text for visibility
      secondary: '#b0b0b0', // Lighter text color
    },
  },
});

function Footer() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* Footer with a unique background color */}
      <Box sx={{ backgroundColor: '#1E1E1E', py: 4 }}>
        <Container>
          <Grid container spacing={3} justifyContent="center">
            {/* Copyright Section */}
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="body2" color="text.secondary">
                © 2024 My Portfolio. All rights reserved.
              </Typography>
            </Grid>

            {/* Connect Section */}
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="body2" color="text.secondary">
                Connect with me:
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 1 }}>
                <Link href="https://github.com/briankipchirchir" target="_blank" sx={{ color: 'text.primary' }}>
                  <GitHub fontSize="large" />
                </Link>
                <Link href="https://www.linkedin.com/in/brian-kipchirchir-465609235/" target="_blank" sx={{ color: 'text.primary' }}>
                  <LinkedIn fontSize="large" />
                </Link>
                <Link href="kbrianngetich@gmail.com" sx={{ color: 'text.primary' }}>
                  <Email fontSize="large" />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
