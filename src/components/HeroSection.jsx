import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, Box, Stack } from '@mui/material';
import { GitHub, LinkedIn, Twitter, KeyboardArrowDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const roles = [
    'Full-Stack Developer',
    'Microservices Architect',
    'Spring Boot Engineer',
    'React Developer',
];

function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;
        if (typing) {
            if (displayed.length < current.length) {
                timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
            } else {
                setRoleIndex((prev) => (prev + 1) % roles.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, roleIndex]);

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                position: 'relative',
                background: '#0a0a0f',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
                overflow: 'hidden',
            }}
        >
            {/* Animated grid background */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(rgba(144,202,249,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(144,202,249,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    zIndex: 0,
                }}
            />

            {/* Glow orbs */}
            <Box sx={{
                position: 'absolute', top: '20%', left: '15%',
                width: 350, height: 350,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(25,118,210,0.15) 0%, transparent 70%)',
                zIndex: 0,
                filter: 'blur(40px)',
            }} />
            <Box sx={{
                position: 'absolute', bottom: '20%', right: '15%',
                width: 300, height: 300,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(144,202,249,0.1) 0%, transparent 70%)',
                zIndex: 0,
                filter: 'blur(40px)',
            }} />

            {/* Content */}
            <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 2.5,
                            py: 0.8,
                            borderRadius: '50px',
                            border: '1px solid rgba(144,202,249,0.3)',
                            backgroundColor: 'rgba(144,202,249,0.06)',
                            mb: 4,
                        }}
                    >
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#4CAF50', boxShadow: '0 0 8px #4CAF50', animation: 'pulse 2s infinite' }} />
                        <Typography variant="caption" sx={{ color: '#90caf9', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, fontSize: '0.7rem' }}>
                            Available for opportunities
                        </Typography>
                    </Box>
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.8rem', md: '5rem' },
                            fontWeight: 800,
                            lineHeight: 1.1,
                            mb: 2,
                            background: 'linear-gradient(135deg, #ffffff 40%, #90caf9 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: -1,
                        }}
                    >
                        Brian Kipchirchir
                    </Typography>
                </motion.div>

                {/* Typewriter role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.2rem', md: '1.8rem' },
                            color: 'rgba(255,255,255,0.5)',
                            mb: 3,
                            fontWeight: 400,
                            minHeight: '2.2rem',
                        }}
                    >
                        <span style={{ color: '#90caf9', fontWeight: 600 }}>{displayed}</span>
                        <span style={{ color: '#90caf9', animation: 'blink 1s step-end infinite' }}>|</span>
                    </Typography>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'rgba(255,255,255,0.45)',
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            maxWidth: '580px',
                            mx: 'auto',
                            mb: 5,
                            lineHeight: 1.8,
                        }}
                    >
                        Building scalable distributed systems and modern web applications with Java, Spring Boot, React, and Angular. Currently at Turnkey Africa & Transformers Tech Kids.
                    </Typography>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 5 }}>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            size="large"
                            sx={{
                                px: 4, py: 1.5,
                                borderRadius: '8px',
                                backgroundColor: '#1976d2',
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                textTransform: 'none',
                                letterSpacing: 0.5,
                                boxShadow: '0 0 20px rgba(25,118,210,0.4)',
                                '&:hover': {
                                    backgroundColor: '#1565c0',
                                    boxShadow: '0 0 30px rgba(25,118,210,0.6)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Get In Touch
                        </Button>
                        <Button
                            component={Link}
                            to="/projects"
                            variant="outlined"
                            size="large"
                            sx={{
                                px: 4, py: 1.5,
                                borderRadius: '8px',
                                borderColor: 'rgba(255,255,255,0.2)',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#90caf9',
                                    backgroundColor: 'rgba(144,202,249,0.07)',
                                    transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            View Projects
                        </Button>
                    </Stack>
                </motion.div>

                {/* Social links */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                    <Stack direction="row" spacing={3} justifyContent="center">
                        {[
                            { icon: <GitHub />, href: 'https://github.com/briankipchirchir', label: 'GitHub' },
                            { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/brian-kipchirchir-465609235/', label: 'LinkedIn' },
                            { icon: <Twitter />, href: 'https://x.com/kip0824', label: 'Twitter' },
                        ].map(({ icon, href, label }) => (
                            <Box
                                key={label}
                                component="a"
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: 'rgba(255,255,255,0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    textDecoration: 'none',
                                    fontSize: '0.8rem',
                                    transition: 'all 0.2s ease',
                                    '&:hover': { color: '#90caf9', transform: 'translateY(-2px)' },
                                }}
                            >
                                {icon}
                            </Box>
                        ))}
                    </Stack>
                </motion.div>
            </Box>

            {/* Scroll indicator */}
            <Box
                sx={{
                    position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
                    zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',
                    color: 'rgba(255,255,255,0.2)',
                    animation: 'bounce 2s infinite',
                }}
            >
                <Typography variant="caption" sx={{ letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.65rem', mb: 0.5 }}>scroll</Typography>
                <KeyboardArrowDown fontSize="small" />
            </Box>

            <style>{`
                @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
                @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
                @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
            `}</style>
        </Box>
    );
}

export default HeroSection;