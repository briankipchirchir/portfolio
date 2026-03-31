import React, { useState } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, Box, Chip, Stack } from '@mui/material';
import { Launch, Code } from '@mui/icons-material';

function ProjectsSection() {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: 'SmartCommerce',
            subtitle: 'Full-Stack E-Commerce Platform',
            description: 'A full-stack e-commerce platform with Angular frontend and Spring Boot microservices backend. Features product catalogue, shopping cart, multi-step checkout, order tracking, and admin dashboard.',
            tags: ['Angular', 'Spring Boot', 'Keycloak', 'PostgreSQL', 'Redis', 'Docker', 'Microservices'],
            category: 'Full Stack',
            link: 'https://github.com/briankipchirchir/Smart-commerce',
            color: '#4CAF50',
        },
        {
            title: 'Hotel Booking System',
            subtitle: 'Distributed Microservices Architecture',
            description: 'A microservices-based hotel booking platform with Eureka service discovery, Apache Kafka event-driven architecture, Redis caching, and Resilience4j circuit breakers.',
            tags: ['Spring Boot', 'Kafka', 'Eureka', 'Redis', 'Docker', 'Prometheus'],
            category: 'Backend',
            link: 'https://github.com/briankipchirchir/hotel-system',
            color: '#FF9800',
        },
        {
            title: 'Hospital Management System',
            subtitle: 'Full-Stack Health Platform',
            description: 'A full-stack hospital management system handling patient records, doctor schedules, appointments, diagnoses, and prescriptions with role-based access control.',
            tags: ['React', 'Flask', 'SQLite', 'REST API'],
            category: 'Full Stack',
            link: 'https://afya-mis-project.vercel.app/',
            color: '#2196F3',
        },
        {
            title: 'Matwana Parcel Tracking',
            subtitle: 'Real-Time Logistics System',
            description: 'A full-stack parcel tracking and logistics system with real-time status updates via WebSockets, interactive dashboards, and smooth tracking timelines.',
            tags: ['React', 'Flask', 'WebSockets', 'REST API'],
            category: 'Full Stack',
            link: 'https://matwana-frontend-ndfr.onrender.com/',
            color: '#9C27B0',
        },
        {
            title: 'Bookly',
            subtitle: 'Book Collection Manager',
            description: 'A web app for organizing personal book collections, integrated with Google Books API and text-to-speech functionality for visually impaired users.',
            tags: ['React', 'Flask', 'Google Books API', 'Text-to-Speech'],
            category: 'Full Stack',
            link: 'https://phase2-project-my-books-app.vercel.app/',
            color: '#00BCD4',
        },
        {
            title: 'Education Africa',
            subtitle: 'Responsive Exhibition Platform',
            description: 'A responsive platform for an education exhibition where attendees can register as individuals or institutions.',
            tags: ['React', 'Responsive Design'],
            category: 'Frontend',
            link: 'https://www.exploreeducationafrica.com/',
            color: '#FF5722',
        },
        {
            title: 'School Website',
            subtitle: 'Responsive TypeScript App',
            description: 'A fully responsive, mobile-first school website with animated UI interactions, strongly-typed reusable components, and accessible navigation.',
            tags: ['React', 'TypeScript', 'CSS Animations', 'Git'],
            category: 'Frontend',
            link: null,
            color: '#E91E63',
        },
    ];

    const categories = ['All', 'Full Stack', 'Backend', 'Frontend'];

    const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <Box
            sx={{
                width: '100%',
                background: 'linear-gradient(135deg, #121212, #1a237e)',
                color: 'white',
                py: 8,
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    sx={{
                        color: 'white',
                        mb: 1,
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        letterSpacing: 3,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                    }}
                >
                    Projects
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 4 }}>
                    A selection of things I've built
                </Typography>

                {/* Filter Chips */}
                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 5, flexWrap: 'wrap', gap: 1 }}>
                    {categories.map(cat => (
                        <Chip
                            key={cat}
                            label={cat}
                            onClick={() => setFilter(cat)}
                            sx={{
                                color: filter === cat ? '#121212' : 'white',
                                backgroundColor: filter === cat ? '#90caf9' : 'rgba(255,255,255,0.1)',
                                fontWeight: 600,
                                border: '1px solid rgba(144,202,249,0.3)',
                                '&:hover': { backgroundColor: '#90caf9', color: '#121212' },
                                transition: 'all 0.2s ease',
                            }}
                        />
                    ))}
                </Stack>

                <Grid container spacing={3}>
                    {filtered.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    backgroundColor: '#1e1e1e',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: `0 12px 30px rgba(0,0,0,0.6), 0 0 0 1px ${project.color}44`,
                                    },
                                }}
                            >
                                {/* Color accent bar */}
                                <Box sx={{ height: '4px', backgroundColor: project.color }} />

                                <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'left' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>
                                            {project.title}
                                        </Typography>
                                        <Chip
                                            label={project.category}
                                            size="small"
                                            sx={{
                                                backgroundColor: `${project.color}22`,
                                                color: project.color,
                                                fontSize: '0.65rem',
                                                fontWeight: 700,
                                                border: `1px solid ${project.color}44`,
                                            }}
                                        />
                                    </Box>

                                    <Typography variant="caption" sx={{ color: project.color, fontWeight: 600, mb: 1.5, display: 'block' }}>
                                        {project.subtitle}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', mb: 2, lineHeight: 1.7, fontSize: '0.82rem' }}>
                                        {project.description}
                                    </Typography>

                                    {/* Tech tags */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                                        {project.tags.map(tag => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'rgba(255,255,255,0.07)',
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: '0.65rem',
                                                    height: '20px',
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    {project.link ? (
                                        <Button
                                            variant="outlined"
                                            href={project.link}
                                            target="_blank"
                                            endIcon={<Launch sx={{ fontSize: '0.9rem' }} />}
                                            size="small"
                                            sx={{
                                                color: project.color,
                                                borderColor: `${project.color}66`,
                                                borderRadius: '20px',
                                                textTransform: 'none',
                                                fontSize: '0.78rem',
                                                '&:hover': {
                                                    borderColor: project.color,
                                                    backgroundColor: `${project.color}11`,
                                                },
                                            }}
                                        >
                                            View Live
                                        </Button>
                                    ) : (
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <Code sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)' }} />
                                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
                                                Private / In Progress
                                            </Typography>
                                        </Box>
                                    )}
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