import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { Launch } from '@mui/icons-material';
import hosi from '../assets/hospital.jpg';
import book from '../assets/book.jpg';
import Education from '../assets/education.jpg';
import parcel from '../assets/matwana.jpg';

function ProjectsSection() {
    const projects = [
        {
            title: 'Hospital Management System',
            description: 'A system to streamline hospital operations, featuring appointment management and more.',
            image: hosi,
            link: 'https://afya-mis-project.vercel.app/',
        },
        {
            title: 'Matwana Parcel Tracking System',
            description: 'A robust parcel tracking platform designed to enhance efficiency and accuracy in delivery operations. Built with a Flask backend for seamless data management and API integration, it offers real-time updates and intuitive user interactions.',
            image: parcel,
            link: 'https://matwana-frontend-ndfr.onrender.com/',
        },
        
        {
            title: 'Bookly - Book Collection Manager',
            description: 'A platform to organize and manage book collections. Integrated with Google Books API,Utilized React for the frontend.',
            image: book,
            link: 'https://phase2-project-my-books-app.vercel.app/',
        },
        {
            title: 'Education africa',
            description: 'A responsive platform for education exhibition,attendees could register as individuals or institutions .',
            image: Education,
            link: 'https://www.exploreeducationafrica.com/',
        }
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
                    Projects
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
