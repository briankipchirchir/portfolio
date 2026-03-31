import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
];

const socials = [
    { icon: <GitHub sx={{ fontSize: '1.1rem' }} />, href: 'https://github.com/briankipchirchir', label: 'GitHub' },
    { icon: <LinkedIn sx={{ fontSize: '1.1rem' }} />, href: 'https://www.linkedin.com/in/brian-kipchirchir-465609235/', label: 'LinkedIn' },
    { icon: <Twitter sx={{ fontSize: '1.1rem' }} />, href: 'https://x.com/kip0824', label: 'Twitter' },
    { icon: <Email sx={{ fontSize: '1.1rem' }} />, href: 'mailto:kbrianngetich@gmail.com', label: 'Email' },
];

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: '#06060a',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                py: 5,
                color: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="flex-start" justifyContent="space-between">
                    {/* Brand */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                            <Box sx={{
                                width: 34, height: 34, borderRadius: '8px',
                                background: 'linear-gradient(135deg, #1976d2, #90caf9)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Typography sx={{ fontWeight: 800, color: 'white', fontSize: '0.72rem' }}>BKN</Typography>
                            </Box>
                            <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>Brian Kipchirchir Ngetich</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', lineHeight: 1.8, maxWidth: 280 }}>
                            Full Stack Developer building scalable distributed systems and modern web applications.
                        </Typography>
                    </Grid>

                    {/* Nav links */}
                    <Grid item xs={6} md={3}>
                        <Typography variant="caption" sx={{ color: '#90caf9', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, fontSize: '0.68rem', mb: 2, display: 'block' }}>
                            Navigation
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {navLinks.map(link => (
                                <Typography
                                    key={link.to}
                                    component={Link}
                                    to={link.to}
                                    variant="body2"
                                    sx={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontSize: '0.82rem', '&:hover': { color: '#90caf9' }, transition: 'color 0.2s' }}
                                >
                                    {link.label}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    {/* Socials */}
                    <Grid item xs={6} md={3}>
                        <Typography variant="caption" sx={{ color: '#90caf9', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, fontSize: '0.68rem', mb: 2, display: 'block' }}>
                            Connect
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {socials.map(({ icon, href, label }) => (
                                <Box
                                    key={label}
                                    component="a"
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', '&:hover': { color: '#90caf9' }, transition: 'color 0.2s' }}
                                >
                                    {icon}
                                    <Typography variant="body2" sx={{ fontSize: '0.82rem' }}>{label}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom bar */}
                <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>
                        © {new Date().getFullYear()} Brian Kipchirchir Ngetich. All rights reserved.
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>
                        Built with React & Material UI
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;