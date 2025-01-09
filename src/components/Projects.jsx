import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { Launch } from '@mui/icons-material';
import hosi from '../assets/hospital.jpg';

function ProjectsSection() {
    const projects = [
        {
            title: 'Bookly - Book Collection Manager',
            description: 'A platform to organize and manage book collections. Integrated with Google Books API.',
            image: 'https://via.placeholder.com/150',
            link: 'https://example.com/bookly',
        },
        {
            title: 'Car Selling Platform',
            description: 'A responsive platform for buying and selling cars online, built with React.',
            image: '',
            link: 'https://example.com/car-platform',
        },
        {
            title: 'Hospital Management System',
            description: 'A system to streamline hospital operations, featuring appointment management and more.',
            image: hosi,
            link: 'https://afya-mis-project.vercel.app/',
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                background: 'linear-gradient(135deg, #121212, #1a237e)', // Gradient background
                color: 'white',
                py: 5,
                textAlign: 'center',
            }}
        >
            <Container sx={{ maxWidth: '1200px' }}>
                <Typography
                    variant="h4"
                    sx={{
                        color: 'white',
                        mb: 4,
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                    }}
                >
                    Featured Work
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    backgroundColor: '#1e1e1e',
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
                                    overflow: 'hidden',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{
                                        transition: 'transform 0.3s ease',
                                        '&:hover': { transform: 'scale(1.1)' },
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 600,
                                            mb: 1,
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            mb: 2,
                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={project.link}
                                        target="_blank"
                                        endIcon={<Launch />}
                                        sx={{
                                            mt: 2,
                                            borderRadius: '20px',
                                            px: 3,
                                            py: 1,
                                            textTransform: 'uppercase',
                                            '&:hover': {
                                                backgroundColor: '#1976d2',
                                            },
                                        }}
                                    >
                                        View Project
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default ProjectsSection;
