import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, Box, Stack } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';  // Import Link for navigation

function HeroSection() {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh', // Full viewport height
                position: 'relative',
                backgroundImage:
                    'url("https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg")', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
            }}
        >
            {/* Dark Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay for dark mode
                    zIndex: 1,
                }}
            />

            {/* Hero Content */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2, // Ensure content is above the overlay
                }}
            >
                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '2rem', md: '3.5rem' }, // Responsive font size
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for better contrast in dark mode
                    }}
                >
                    Welcome
                </Typography>

                {/* Animated Text */}
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1rem', md: '1.5rem' }, // Responsive font size
                            color: 'rgba(255, 255, 255, 0.85)', // Slightly transparent text for better contrast
                        }}
                    >
                        I'm a Full-Stack Developer passionate about creating impactful web solutions.
                    </Typography>
                </motion.div>

                {/* Contact Me Button - Using React Router Link */}
                <Button
                    component={Link} // Use Link for navigation
                    to="/contact"  // Link to the Contact section
                    variant="contained"
                    size="large"
                    sx={{
                        mt: 2,
                        px: 4,
                        py: 1.5,
                        fontSize: '1rem',
                        backgroundColor: '#1976d2', // Material UI primary color
                        '&:hover': {
                            backgroundColor: '#115293',
                            transform: 'scale(1.05)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                        },
                    }}
                >
                    Contact Me
                </Button>

                {/* Social Media Links */}
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        mt: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <a
                        href="https://github.com/briankipchirchir"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'white', fontSize: '2rem' }}
                    >
                        <GitHub fontSize="large" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brian-kipchirchir-465609235/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'white', fontSize: '2rem' }}
                    >
                        <LinkedIn fontSize="large" />
                    </a>
                    <a
                        href="https://x.com/kip0824"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'white', fontSize: '2rem' }}
                    >
                        <Twitter fontSize="large" />
                    </a>
                </Stack>
            </Box>
        </Box>
    );
}

export default HeroSection;
