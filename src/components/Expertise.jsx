import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { Web as WebIcon, Storage as StorageIcon, Server as ServerIcon, Description as DescriptionIcon } from '@mui/icons-material';

function ExpertiseSection() {
    return (
        <Box sx={{ py: 5, backgroundColor: '#121212', color: 'white' }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    color: 'white',
                    textAlign: 'center',
                    mb: 3,
                }}
            >
                My Expertise
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {/* Frontend Developer */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <WebIcon sx={{ fontSize: 50, color: 'white' }} />
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mt: 2 }}>
                            Frontend Developer
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.85)',
                                mt: 1,
                            }}
                        >
                            I have a solid foundation in frontend development and can build websites from the ground up. My expertise includes HTML, CSS, JavaScript, and modern frameworks like React, Next.js, Tailwind CSS, and Phoenix LiveView.
                        </Typography>
                    </Box>
                </Grid>

                {/* Backend Developer */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <ServerIcon sx={{ fontSize: 50, color: 'white' }} />
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mt: 2 }}>
                            Backend Developer
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.85)',
                                mt: 1,
                            }}
                        >
                            I have a strong understanding of backend development, including database design and API development. My experience includes working with Elixir and the Phoenix framework for building robust, scalable applications.
                        </Typography>
                    </Box>
                </Grid>

                {/* Database Design */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <StorageIcon sx={{ fontSize: 50, color: 'white' }} />
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mt: 2 }}>
                            Database Design
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.85)',
                                mt: 1,
                            }}
                        >
                            I have a solid grasp of database design, specializing in efficient and scalable data storage. My focus is on optimizing performance while maintaining data integrity. I ensure that systems are built to handle growth and complexity effectively.
                        </Typography>
                    </Box>
                </Grid>

                {/* Technical Writing */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <DescriptionIcon sx={{ fontSize: 50, color: 'white' }} />
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mt: 2 }}>
                            Technical Writing
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.85)',
                                mt: 1,
                            }}
                        >
                            I have a strong understanding of the content writing process. My focus is on clarity, relevance, and SEO optimization. I ensure the content aligns with the target audience and business goals.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ExpertiseSection;
