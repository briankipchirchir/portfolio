import React from 'react';
import { Typography, Box, Container, Grid, Button, Chip } from '@mui/material';
import { Mail, Phone, LocationOn, OpenInNew, Work, School } from '@mui/icons-material';
import { motion } from 'framer-motion';
import image from '../assets/new.jpg';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
});

function AboutSection() {
    const experience = [
        {
            role: 'Software Developer',
            company: 'Turnkey Africa',
            period: 'April 2025 – Present',
            tech: ['Angular', 'Spring Boot', 'Java', 'PL/SQL', 'PostgreSQL'],
            color: '#90caf9',
        },
        {
            role: 'Software Developer (Backend)',
            company: 'Transformers Tech Kids',
            period: 'January 2026 – Present',
            tech: ['Spring Boot', 'Java', 'JWT', 'MySQL', 'Docker'],
            color: '#80cbc4',
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                background: 'linear-gradient(160deg, #0a0a0f 0%, #0d1b3e 60%, #121212 100%)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                py: 10,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background accent */}
            <Box sx={{
                position: 'absolute', top: '-10%', right: '-5%',
                width: 500, height: 500,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(25,118,210,0.08) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: 0,
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Section header */}
                <motion.div {...fadeUp(0)}>
                    <Typography variant="overline" sx={{ color: '#90caf9', letterSpacing: 4, fontSize: '0.75rem', fontWeight: 700 }}>
                        About Me
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' }, mt: 1, mb: 6, lineHeight: 1.2 }}>
                        Who Am I?
                    </Typography>
                </motion.div>

                <Grid container spacing={6} alignItems="flex-start">
                    {/* Left: Photo + contact */}
                    <Grid item xs={12} md={4}>
                        <motion.div {...fadeUp(0.2)}>
                            {/* Profile image */}
                            <Box sx={{ position: 'relative', display: 'inline-block', mb: 4 }}>
                                <Box
                                    sx={{
                                        width: 220, height: 220,
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        border: '2px solid rgba(144,202,249,0.2)',
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                                        position: 'relative',
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt="Brian Kipchirchir"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Box>
                                {/* Floating badge */}
                                <Box
                                    sx={{
                                        position: 'absolute', bottom: -12, right: -12,
                                        backgroundColor: '#1976d2',
                                        borderRadius: '12px',
                                        px: 2, py: 1,
                                        boxShadow: '0 4px 20px rgba(25,118,210,0.5)',
                                    }}
                                >
                                    <Typography variant="caption" sx={{ color: 'white', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                                        Full Stack Dev
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Contact info */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {[
                                    { icon: <Mail sx={{ fontSize: '1rem', color: '#90caf9' }} />, label: 'kbrianngetich@gmail.com', href: 'mailto:kbrianngetich@gmail.com' },
                                    { icon: <Phone sx={{ fontSize: '1rem', color: '#90caf9' }} />, label: '+254 746 110 366', href: 'tel:+254746110366' },
                                    { icon: <LocationOn sx={{ fontSize: '1rem', color: '#90caf9' }} />, label: 'Nairobi, Kenya', href: null },
                                ].map(({ icon, label, href }) => (
                                    <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        {icon}
                                        {href ? (
                                            <Typography component="a" href={href} variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', '&:hover': { color: '#90caf9' }, transition: 'color 0.2s' }}>
                                                {label}
                                            </Typography>
                                        ) : (
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)' }}>{label}</Typography>
                                        )}
                                    </Box>
                                ))}
                            </Box>

                            <Button
                                variant="contained"
                                href="mailto:kbrianngetich@gmail.com"
                                endIcon={<OpenInNew sx={{ fontSize: '0.85rem' }} />}
                                sx={{
                                    mt: 3,
                                    backgroundColor: '#1976d2',
                                    textTransform: 'none',
                                    fontWeight: 700,
                                    borderRadius: '8px',
                                    boxShadow: '0 0 20px rgba(25,118,210,0.3)',
                                    '&:hover': { backgroundColor: '#1565c0', boxShadow: '0 0 30px rgba(25,118,210,0.5)' },
                                }}
                            >
                                Send an Email
                            </Button>
                        </motion.div>
                    </Grid>

                    {/* Right: Bio + experience */}
                    <Grid item xs={12} md={8}>
                        <motion.div {...fadeUp(0.3)}>
                            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 2, fontSize: '1.05rem', mb: 4 }}>
                                I'm <span style={{ color: '#90caf9', fontWeight: 700 }}>Brian Kipchirchir Ngetich</span>, a results-driven Software Developer with expertise in designing and building full-stack and distributed systems.
                                Skilled in developing scalable microservices, RESTful APIs, and responsive frontend applications.
                                Experienced in Agile collaboration and containerized cloud-native environments.
                            </Typography>
                        </motion.div>

                        {/* Education */}
                        <motion.div {...fadeUp(0.4)}>
                            <Box sx={{ mb: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                    <School sx={{ color: '#90caf9', fontSize: '1.1rem' }} />
                                    <Typography variant="overline" sx={{ color: '#90caf9', letterSpacing: 3, fontSize: '0.7rem', fontWeight: 700 }}>
                                        Education
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    {[
                                        { school: 'Kenyatta University', degree: 'BSc. Computer Science' },
                                        { school: 'Moringa School', degree: 'Software Development Intensive · Jun–Nov 2024' },
                                        {school:'Andela', degree:'Linux and Kubernetes .present'}
                                    ].map(({ school, degree }) => (
                                        <Box key={school} sx={{ pl: 2, borderLeft: '2px solid rgba(144,202,249,0.2)' }}>
                                            <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>{school}</Typography>
                                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.45)' }}>{degree}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </motion.div>

                        {/* Experience */}
                        {/* <motion.div {...fadeUp(0.5)}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                <Work sx={{ color: '#90caf9', fontSize: '1.1rem' }} />
                                <Typography variant="overline" sx={{ color: '#90caf9', letterSpacing: 3, fontSize: '0.7rem', fontWeight: 700 }}>
                                    Experience
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {experience.map((exp) => (
                                    <Box
                                        key={exp.company}
                                        sx={{
                                            p: 3,
                                            borderRadius: '14px',
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: `1px solid ${exp.color}22`,
                                            borderLeft: `3px solid ${exp.color}`,
                                            transition: 'all 0.3s ease',
                                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.06)', transform: 'translateX(4px)' },
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1, flexWrap: 'wrap', gap: 1 }}>
                                            <Box>
                                                <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700, fontSize: '0.95rem' }}>{exp.role}</Typography>
                                                <Typography variant="body2" sx={{ color: exp.color, fontWeight: 600, fontSize: '0.82rem' }}>{exp.company}</Typography>
                                            </Box>
                                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', whiteSpace: 'nowrap' }}>{exp.period}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {exp.tech.map(t => (
                                                <Chip key={t} label={t} size="small" sx={{ backgroundColor: `${exp.color}15`, color: exp.color, fontSize: '0.65rem', height: '20px', border: `1px solid ${exp.color}33` }} />
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </motion.div> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutSection;