import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        label: 'Languages',
        color: '#90caf9',
        skills: ['Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
        label: 'Frameworks & Libraries',
        color: '#80cbc4',
        skills: ['Spring Boot', 'React', 'Angular', 'Flask',  'Next.js'],
    },
    {
        label: 'Architecture & Systems',
        color: '#ce93d8',
        skills: ['Microservices', 'REST APIs', 'Event-Driven Systems', 'Responsive Design'],
    },
    {
        label: 'DevOps & Tools',
        color: '#ffcc80',
        skills: ['Docker', 'Kubernetes', 'Docker Compose', 'Kafka', 'RabbitMq', 'Eureka', 'API Gateway', 'Git', 'Postman', 'Swagger', 'Jira', 'Bamboo'],
    },
    {
        label: 'Databases',
        color: '#ef9a9a',
        skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Oracle', 'MongoDB', 'Redis'],
    },
    {
        label: 'Testing & Security',
        color: '#a5d6a7',
        skills: ['JUnit', 'Jasmine/Karma', 'Resilience4j', 'Keycloak', 'JWT', 'Spring Security'],
    },
];

function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #121212, #1a237e)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
                py: 8,
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3rem' },
                            textShadow: '3px 3px 5px rgba(0,0,0,0.8)',
                            mb: 1,
                            letterSpacing: 2,
                            textTransform: 'uppercase',
                        }}
                    >
                        Skills & Technologies
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mb: 5 }}>
                        Hover a category to highlight its skills
                    </Typography>
                </motion.div>

                <Grid container spacing={4} justifyContent="center">
                    {skillCategories.map((cat, catIndex) => (
                        <Grid item xs={12} sm={6} md={4} key={catIndex}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                            >
                                <Box
                                    onMouseEnter={() => setActiveCategory(cat.label)}
                                    onMouseLeave={() => setActiveCategory(null)}
                                    sx={{
                                        backgroundColor: activeCategory === cat.label
                                            ? 'rgba(255,255,255,0.08)'
                                            : 'rgba(255,255,255,0.03)',
                                        border: `1px solid ${activeCategory === cat.label ? cat.color + '88' : 'rgba(255,255,255,0.08)'}`,
                                        borderRadius: '16px',
                                        p: 3,
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        textAlign: 'left',
                                    }}
                                >
                                    {/* Category header */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                        <Box
                                            sx={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                backgroundColor: cat.color,
                                                boxShadow: `0 0 8px ${cat.color}`,
                                            }}
                                        />
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: cat.color,
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: 1.5,
                                                fontSize: '0.75rem',
                                            }}
                                        >
                                            {cat.label}
                                        </Typography>
                                    </Box>

                                    {/* Skills chips */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                                        {cat.skills.map((skill, i) => (
                                            <Chip
                                                key={i}
                                                label={skill}
                                                size="small"
                                                sx={{
                                                    backgroundColor: activeCategory === cat.label
                                                        ? `${cat.color}22`
                                                        : 'rgba(255,255,255,0.06)',
                                                    color: activeCategory === cat.label
                                                        ? cat.color
                                                        : 'rgba(255,255,255,0.7)',
                                                    border: `1px solid ${activeCategory === cat.label ? cat.color + '55' : 'transparent'}`,
                                                    fontWeight: 500,
                                                    fontSize: '0.75rem',
                                                    transition: 'all 0.2s ease',
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Summary stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Grid container spacing={3} justifyContent="center" sx={{ mt: 6 }}>
                        {[
                            { value: '4+', label: 'Languages' },
                            { value: '6+', label: 'Frameworks' },
                            { value: '10+', label: 'DevOps Tools' },
                            { value: '6+', label: 'Databases' },
                        ].map((stat, i) => (
                            <Grid item xs={6} sm={3} key={i}>
                                <Box
                                    sx={{
                                        backgroundColor: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderRadius: '12px',
                                        p: 2.5,
                                    }}
                                >
                                    <Typography variant="h4" sx={{ color: '#90caf9', fontWeight: 800 }}>
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1 }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
}

export default SkillsSection;