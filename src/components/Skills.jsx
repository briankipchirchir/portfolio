import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Skills data (no icons)
const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Flask', level: 70 },
  { name: 'Next.js', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Material UI', level: 80 },
  { name: 'Git', level: 75 },
  { name: 'API Development', level: 80 },
  { name: 'Responsive Design', level: 90 },
  { name: 'Django', level: 89 },
  { name: 'GitHub', level: 89 },
];

function SkillsSection() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #121212, #1a237e)', // Same gradient background as About Section
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        py: 6,
      }}
    >
      <Container sx={{ maxWidth: '900px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' }, // Responsive font size
              textShadow: '3px 3px 5px rgba(0, 0, 0, 0.8)',
              mb: 3,
            }}
          >
            Skills & Technologies
          </Typography>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={2} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box
                  sx={{
                    backgroundColor: '#90caf9',
                    color: '#121212',
                    px: 3, // Reduced padding
                    py: 2, // Reduced padding
                    borderRadius: '20px', // Slightly rounded corners
                    fontSize: { xs: '0.9rem', md: '1rem' }, // Smaller font size
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minWidth: '130px', // Slightly smaller minimum width
                  }}
                >
                  <Typography>{skill.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default SkillsSection;
