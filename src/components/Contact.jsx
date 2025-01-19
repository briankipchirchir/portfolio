import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
            setErrorMessage('Please fill out all fields!');
            return;
        }

        // Use your Email.js service and template IDs
        const serviceID = 'service_3uuvfpi'; // Replace with your Email.js Service ID
        const templateID = 'template_kl8qbkv'; // Replace with your Email.js Template ID
        const publicKey = 'nOAeVTkhO-nqV4TW4'; // Replace with your Email.js Public Key

        emailjs
            .send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setSuccessMessage('Thank you for your message! I will get back to you soon.');
                setErrorMessage('');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                setSuccessMessage('');
                setErrorMessage('Failed to send email. Please try again.');
            });
    };

    return (
        <Box sx={{ background: 'linear-gradient(135deg, #121212, #1a237e)', py: 5 }}>
            <Container>
                <Typography variant="h3" color="white" gutterBottom align="center">
                    Get In Touch
                </Typography>
                <Typography variant="h5" color="text.secondary" align="center" paragraph>
                    Have a project in mind? Feel free to reach out!
                </Typography>

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
                            {errorMessage && (
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'red', mt: 2, textAlign: 'center' }}
                                >
                                    {errorMessage}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 5, textAlign: 'center' }}>
                    <Typography variant="h6" color="white" gutterBottom>
                        Quick Links
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Link to="/" style={{ color: '#00bcd4', textDecoration: 'none' }}>
                                Home
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/about" style={{ color: '#00bcd4', textDecoration: 'none' }}>
                                About
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/skills" style={{ color: '#00bcd4', textDecoration: 'none' }}>
                                Skills
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/projects" style={{ color: '#00bcd4', textDecoration: 'none' }}>
                                Projects
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/services" style={{ color: '#00bcd4', textDecoration: 'none' }}>
                                Services
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/contact" style={{ color: '#00bcd4', textDecoration: 'none' }}>
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
