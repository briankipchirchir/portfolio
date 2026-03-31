import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';
import { Mail, Phone, LocationOn, GitHub, LinkedIn, Twitter, Send } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('Please fill out all fields!');
            return;
        }
        setLoading(true);
        emailjs
            .send('service_3uuvfpi', 'template_kl8qbkv', formData, 'nOAeVTkhO-nqV4TW4')
            .then(() => {
                setSuccessMessage('Message sent! I\'ll get back to you soon.');
                setErrorMessage('');
                setFormData({ name: '', email: '', message: '' });
                setLoading(false);
            })
            .catch(() => {
                setErrorMessage('Failed to send. Please try again.');
                setSuccessMessage('');
                setLoading(false);
            });
    };

    const inputSx = {
        '& .MuiOutlinedInput-root': {
            color: 'white',
            borderRadius: '10px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
            '&:hover fieldset': { borderColor: 'rgba(144,202,249,0.4)' },
            '&.Mui-focused fieldset': { borderColor: '#90caf9', borderWidth: '1px' },
        },
        '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.35)' },
        '& .MuiInputLabel-root.Mui-focused': { color: '#90caf9' },
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(160deg, #0a0a0f 0%, #0d1b3e 60%, #121212 100%)',
                py: 10,
                position: 'relative',
                overflow: 'hidden',
                color: 'white',
            }}
        >
            {/* Background glow */}
            <Box sx={{
                position: 'absolute', bottom: '-10%', left: '-5%',
                width: 500, height: 500,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(25,118,210,0.08) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0,
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography variant="overline" sx={{ color: '#90caf9', letterSpacing: 4, fontSize: '0.75rem', fontWeight: 700 }}>
                        Contact
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' }, mt: 1, mb: 2 }}>
                        Get In Touch
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.45)', mb: 7, maxWidth: 480 }}>
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </Typography>
                </motion.div>

                <Grid container spacing={6}>
                    {/* Left info panel */}
                    <Grid item xs={12} md={4}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>Brian Kipchirchir Ngetich</Typography>
                                <Typography variant="body2" sx={{ color: '#90caf9', fontWeight: 600, mb: 3 }}>Full Stack Developer</Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, fontSize: '0.9rem' }}>
                                    Always open to new opportunities, collaborations, and interesting projects. Let's build something great together.
                                </Typography>
                            </Box>

                            {/* Contact details */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 5 }}>
                                {[
                                    { icon: <Mail sx={{ fontSize: '1rem', color: '#90caf9' }} />, text: 'kbrianngetich@gmail.com', href: 'mailto:kbrianngetich@gmail.com' },
                                    { icon: <Phone sx={{ fontSize: '1rem', color: '#90caf9' }} />, text: '+254 746 110 366', href: 'tel:+254746110366' },
                                    { icon: <LocationOn sx={{ fontSize: '1rem', color: '#90caf9' }} />, text: 'Nairobi, Kenya', href: null },
                                ].map(({ icon, text, href }) => (
                                    <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <Box sx={{ width: 36, height: 36, borderRadius: '10px', backgroundColor: 'rgba(144,202,249,0.08)', border: '1px solid rgba(144,202,249,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {icon}
                                        </Box>
                                        {href ? (
                                            <Typography component="a" href={href} variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', '&:hover': { color: '#90caf9' }, transition: 'color 0.2s' }}>
                                                {text}
                                            </Typography>
                                        ) : (
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)' }}>{text}</Typography>
                                        )}
                                    </Box>
                                ))}
                            </Box>

                            {/* Socials */}
                            <Box sx={{ display: 'flex', gap: 1.5 }}>
                                {[
                                    { icon: <GitHub sx={{ fontSize: '1.1rem' }} />, href: 'https://github.com/briankipchirchir' },
                                    { icon: <LinkedIn sx={{ fontSize: '1.1rem' }} />, href: 'https://www.linkedin.com/in/brian-kipchirchir-465609235/' },
                                    { icon: <Twitter sx={{ fontSize: '1.1rem' }} />, href: 'https://x.com/kip0824' },
                                ].map(({ icon, href }) => (
                                    <Box
                                        key={href}
                                        component="a"
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            width: 40, height: 40,
                                            borderRadius: '10px',
                                            backgroundColor: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'rgba(255,255,255,0.4)',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            '&:hover': { color: '#90caf9', borderColor: 'rgba(144,202,249,0.3)', backgroundColor: 'rgba(144,202,249,0.07)' },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Right form */}
                    <Grid item xs={12} md={8}>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2.5,
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                    borderRadius: '20px',
                                    p: { xs: 3, md: 4 },
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Your Name" name="name" value={formData.name} onChange={handleChange} fullWidth sx={inputSx} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth sx={inputSx} />
                                    </Grid>
                                </Grid>
                                <TextField
                                    label="Your Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    multiline rows={5}
                                    fullWidth sx={inputSx}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={loading}
                                    endIcon={<Send sx={{ fontSize: '0.9rem' }} />}
                                    sx={{
                                        alignSelf: 'flex-start',
                                        px: 4, py: 1.5,
                                        borderRadius: '10px',
                                        backgroundColor: '#1976d2',
                                        textTransform: 'none',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        boxShadow: '0 0 20px rgba(25,118,210,0.3)',
                                        '&:hover': { backgroundColor: '#1565c0', boxShadow: '0 0 30px rgba(25,118,210,0.5)', transform: 'translateY(-1px)' },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </Button>

                                {successMessage && (
                                    <Box sx={{ p: 2, borderRadius: '10px', backgroundColor: 'rgba(76,175,80,0.1)', border: '1px solid rgba(76,175,80,0.3)' }}>
                                        <Typography variant="body2" sx={{ color: '#81c784' }}>{successMessage}</Typography>
                                    </Box>
                                )}
                                {errorMessage && (
                                    <Box sx={{ p: 2, borderRadius: '10px', backgroundColor: 'rgba(244,67,54,0.1)', border: '1px solid rgba(244,67,54,0.3)' }}>
                                        <Typography variant="body2" sx={{ color: '#e57373' }}>{errorMessage}</Typography>
                                    </Box>
                                )}
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Footer quick links */}
                <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                    {['/', '/about', '/skills', '/projects', '/services', '/contact'].map((path, i) => {
                        const labels = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];
                        return (
                            <Typography
                                key={path}
                                component={Link}
                                to={path}
                                variant="caption"
                                sx={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 1.5, fontSize: '0.68rem', fontWeight: 600, '&:hover': { color: '#90caf9' }, transition: 'color 0.2s' }}
                            >
                                {labels[i]}
                            </Typography>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}

export default ContactSection;