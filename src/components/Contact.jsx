import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, Link } from '@mui/material';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill out all fields!');
            return;
        }
        setSuccessMessage('Thank you for your message! I will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <Box sx={{ background: 'linear-gradient(135deg, #121212, #1a237e)', py: 5 }}>
            <Container>
                {/* Contact Section Title and Intro */}
                <Typography variant="h3" color="white" gutterBottom align="center">
                    Get In Touch
                </Typography>
                <Typography variant="h5" color="text.secondary" align="center" paragraph>
                    Have a project in mind? Feel free to reach out!
                </Typography>

                {/* Personal Information and Contact Form */}
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" color="white">
                            Brian Kipchirchir
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Full Stack Developer
                        </Typography>
                        <Typography variant="body2" color="white" paragraph>
                            I'm always interested in hearing about new projects and opportunities. Let's collaborate to bring your ideas to life!
                        </Typography>

                        {/* Contact Info */}
                        <Typography variant="body2" color="text.secondary" paragraph>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:kbrianngetich@gmail.com" style={{ color: '#00bcd4' }}>
                                kbrianngetich@gmail.com
                            </a>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            <strong>Phone:</strong>{' '}
                            <a href="tel:+254746110366" style={{ color: '#00bcd4' }}>
                                +254 746110366
                            </a>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {/* Contact Form */}
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                backgroundColor: '#1e1e1e',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                maxWidth: '600px',
                                margin: '0 auto',
                            }}
                        >
                            <TextField
                                label="Your Name"
                                variant="outlined"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                            />
                            <TextField
                                label="Your Email"
                                variant="outlined"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                fullWidth
                                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                            />
                            <TextField
                                label="Your Message"
                                variant="outlined"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                fullWidth
                                sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    alignSelf: 'flex-start',
                                    backgroundColor: '#4CAF50',
                                    '&:hover': {
                                        backgroundColor: '#45a049',
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.2s ease-in-out',
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                            {successMessage && (
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'green', mt: 2, textAlign: 'center' }}
                                >
                                    {successMessage}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>

                {/* Quick Links */}
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                    <Typography variant="h6" color="white" gutterBottom>
                        Quick Links
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Link href="#home" color="text.secondary">
                                Home
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#about" color="text.secondary">
                                About
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#skills" color="text.secondary">
                                SkillSet
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#projects" color="text.secondary">
                                Projects
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#services" color="text.secondary">
                                Services
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#contact" color="text.secondary">
                                Contact
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default ContactSection;
