import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'; // Modern Web icon
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined'; // Modern Frontend icon
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined'; // Modern Mobile icon
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'; // Modern Database icon
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined'; // Modern Backend icon

function Services() {
    const services = [
        {
            title: 'Web Development',
            description: 'Build responsive, fast, and modern websites tailored to your needs.',
            icon: <LanguageOutlinedIcon style={{ fontSize: 60, color: '#4CAF50' }} />,
        },
        {
            title: 'Frontend Development',
            description: 'Expert in creating dynamic and interactive user interfaces.',
            icon: <DesignServicesOutlinedIcon style={{ fontSize: 60, color: '#FF5722' }} />,
        },
        {
            title: 'Mobile App Development',
            description: 'Develop seamless and intuitive mobile applications for iOS and Android.',
            icon: <SmartphoneOutlinedIcon style={{ fontSize: 60, color: '#2196F3' }} />,
        },
        {
            title: 'Database Management',
            description: 'Design, optimize, and manage robust databases to store and retrieve your data efficiently.',
            icon: <StorageOutlinedIcon style={{ fontSize: 60, color: '#673AB7' }} />,
        },
        {
            title: 'Backend Development',
            description: 'Build scalable, secure, and efficient server-side applications and APIs.',
            icon: <ApiOutlinedIcon style={{ fontSize: 60, color: '#FFC107' }} />,
        },
    ];

    return (
        <Box sx={{ backgroundColor: '#121212', color: 'white', py: 5 }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    My Services
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" paragraph>
                    I specialize in delivering high-quality services to meet your unique project requirements.
                </Typography>

                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: '#1e1e1e',
                                    color: 'white',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h5" gutterBottom align="center">
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" align="center">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                             
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Services;
