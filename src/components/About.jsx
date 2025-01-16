import React from 'react';
import { Typography, Box, Container, Grid, Button } from '@mui/material';
import { Mail, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';
import image from '../assets/new.jpg';

function AboutSection() {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #121212, #1a237e)', // Gradient background
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
            <Container sx={{ maxWidth: '900px', px: 4 }}>
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
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            textShadow: '3px 3px 5px rgba(0, 0, 0, 0.8)',
                            mb: 3,
                        }}
                    >
                        Who Am I?
                    </Typography>
                </motion.div>

                {/* Introduction with Picture */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <img
                            src={image} // Update the path to your image
                            alt="Brian Kipchirchir"
                            style={{
                                width: '250px', // Adjusted size for larger image
                                height: '250px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: '25px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)', // Shadow for image
                                border: '3px solid #90caf9', // Border around image
                                transition: 'transform 0.3s ease', // Smooth transition for hover
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} // Hover effect
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </Box>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '1.4rem', md: '1.8rem' },
                            lineHeight: 1.8,
                            color: 'rgba(255, 255, 255, 0.85)',
                            mb: 5,
                            textAlign: 'center',  // Ensures text is centered
                        }}
                    >
                        I'm Brian Kipchirchir, a <span style={{ color: '#90caf9' }}>Full Stack Developer</span> passionate about creating modern, dynamic web applications. With expertise in <span style={{ color: '#90caf9' }}>React</span>, <span style={{ color: '#90caf9' }}>Flask</span>, <span style={{ color: '#90caf9' }}>Django</span>, and more, I deliver software solutions that solve real-world problems.
                    </Typography>
                </motion.div>

                {/* Contact Details */}
                <Box sx={{ mt: 4 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            mb: 3,
                        }}
                    >
                        Contact Information
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        {/* Email */}
                        <Grid item xs={12} sm={4}>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Mail sx={{ mr: 1, fontSize: '1.5rem', color: '#90caf9' }} />
                                    <Typography>
                                        <a
                                            href="mailto:kbrianngetich@gmail.com"
                                            style={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                            }}
                                        >
                                            kbrianngetich@gmail.com
                                        </a>
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Phone */}
                        <Grid item xs={12} sm={4}>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Phone sx={{ mr: 1, fontSize: '1.5rem', color: '#90caf9' }} />
                                    <Typography>
                                        <a
                                            href="tel:+254746110366"
                                            style={{
                                                color: 'rgba(255, 255, 255, 0.85)',
                                                textDecoration: 'none',
                                                fontWeight: 600,
                                            }}
                                        >
                                            +254746110366
                                        </a>
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Location */}
                        <Grid item xs={12} sm={4}>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.85)',
                                        fontWeight: 600,
                                    }}
                                >
                                    <strong>Location:</strong> Nairobi, Kenya
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box sx={{ mt: 6 }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: '#90caf9',
                            color: '#121212',
                            fontWeight: 700,
                            '&:hover': {
                                backgroundColor: '#64b5f6',
                            },
                        }}
                        href="mailto:kbrianngetich@gmail.com"
                    >
                        Send Me an Email
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default AboutSection;
