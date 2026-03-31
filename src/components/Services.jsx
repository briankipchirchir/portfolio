import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

const services = [
    {
        title: 'Full-Stack Web Development',
        description: 'End-to-end web applications with Angular or React frontends paired with Spring Boot or Flask backends. Clean architecture, RESTful APIs, and production-ready deployments.',
        icon: LanguageOutlinedIcon,
        color: '#4CAF50',
        tags: ['React', 'Angular', 'Spring Boot', 'Flask'],
    },
    {
        title: 'Microservices Architecture',
        description: 'Design and build scalable distributed systems using microservices patterns with service discovery, API gateway, event-driven communication via Kafka, and containerized deployments.',
        icon: AccountTreeOutlinedIcon,
        color: '#90caf9',
        tags: ['Docker', 'Kafka', 'Eureka', 'Spring Cloud'],
    },
    {
        title: 'Frontend Development',
        description: 'Pixel-perfect, responsive UIs with dynamic interactions and animations. Strong expertise in Angular with Material components and React with modern hooks.',
        icon: DesignServicesOutlinedIcon,
        color: '#FF5722',
        tags: ['TypeScript', 'Angular', 'React', 'Material UI'],
    },
    {
        title: 'Backend & API Development',
        description: 'Scalable, secure, and well-documented server-side applications. RESTful APIs with proper error handling, validation, Swagger docs, and JWT-based authentication.',
        icon: ApiOutlinedIcon,
        color: '#FFC107',
        tags: ['Java', 'Spring Boot', 'JWT', 'Swagger'],
    },
    {
        title: 'Database Design & Management',
        description: 'Schema design, query optimization, stored procedures with PL/SQL, and efficient data modeling. Experience with both relational and NoSQL databases.',
        icon: StorageOutlinedIcon,
        color: '#ce93d8',
        tags: ['PostgreSQL', 'MySQL', 'Redis', 'Oracle'],
    },
    {
        title: 'Mobile App Development',
        description: 'Seamless and intuitive cross-platform mobile applications for iOS and Android with clean UI and smooth performance.',
        icon: SmartphoneOutlinedIcon,
        color: '#2196F3',
        tags: ['React Native', 'TypeScript'],
    },
];

function Services() {
    const [hovered, setHovered] = useState(null);

    return (
        <Box
            sx={{
                backgroundColor: '#0a0a0f',
                color: 'white',
                py: 10,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background grid */}
            <Box sx={{
                position: 'absolute', inset: 0,
                backgroundImage: `linear-gradient(rgba(144,202,249,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(144,202,249,0.03) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
                zIndex: 0,
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Typography variant="overline" sx={{ color: '#90caf9', letterSpacing: 4, fontSize: '0.75rem', fontWeight: 700 }}>
                        What I Do
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' }, mt: 1, mb: 2, lineHeight: 1.2 }}>
                        My Services
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.45)', mb: 7, maxWidth: 520, fontSize: '1rem' }}>
                        Specialized in delivering high-quality, production-ready software tailored to your project requirements.
                    </Typography>
                </motion.div>

                <Grid container spacing={3}>
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isHovered = hovered === index;
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    style={{ height: '100%' }}
                                >
                                    <Card
                                        onMouseEnter={() => setHovered(index)}
                                        onMouseLeave={() => setHovered(null)}
                                        sx={{
                                            height: '100%',
                                            backgroundColor: isHovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                                            border: `1px solid ${isHovered ? service.color + '55' : 'rgba(255,255,255,0.07)'}`,
                                            borderRadius: '18px',
                                            cursor: 'default',
                                            transition: 'all 0.35s ease',
                                            transform: isHovered ? 'translateY(-6px)' : 'none',
                                            boxShadow: isHovered ? `0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px ${service.color}22` : 'none',
                                        }}
                                    >
                                        <CardContent sx={{ p: 3.5 }}>
                                            {/* Icon */}
                                            <Box
                                                sx={{
                                                    width: 52, height: 52,
                                                    borderRadius: '14px',
                                                    backgroundColor: `${service.color}15`,
                                                    border: `1px solid ${service.color}33`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mb: 2.5,
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: isHovered ? `0 0 20px ${service.color}30` : 'none',
                                                }}
                                            >
                                                <Icon sx={{ color: service.color, fontSize: '1.6rem' }} />
                                            </Box>

                                            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, fontSize: '1rem', mb: 1 }}>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontSize: '0.85rem', mb: 2.5 }}>
                                                {service.description}
                                            </Typography>

                                            {/* Tags */}
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                                                {service.tags.map(tag => (
                                                    <Box
                                                        key={tag}
                                                        sx={{
                                                            px: 1.2, py: 0.3,
                                                            borderRadius: '6px',
                                                            backgroundColor: `${service.color}12`,
                                                            border: `1px solid ${service.color}30`,
                                                            color: service.color,
                                                            fontSize: '0.68rem',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {tag}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}

export default Services;