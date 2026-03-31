import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, Drawer, IconButton, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(20px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                    transition: 'all 0.3s ease',
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, px: { xs: 2, md: 4 } }}>
                    {/* Logo */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <Box
                                    sx={{
                                        width: 38, height: 38,
                                        borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #1976d2, #90caf9)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 800, color: 'white', fontSize: '0.8rem', letterSpacing: 0.5 }}>BKN</Typography>
                                </Box>
                                <Typography sx={{ fontWeight: 700, color: 'white', fontSize: '0.9rem', display: { xs: 'none', sm: 'block' }, letterSpacing: 0.5 }}>
                                    Brian Ngetich
                                </Typography>
                            </Box>
                        </Link>
                    </motion.div>

                    {/* Desktop nav */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
                        {navLinks.map((link, i) => {
                            const isActive = location.pathname === link.to;
                            return (
                                <motion.div key={link.to} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                                    <Button
                                        component={Link}
                                        to={link.to}
                                        sx={{
                                            color: isActive ? '#90caf9' : 'rgba(255,255,255,0.5)',
                                            fontWeight: isActive ? 700 : 500,
                                            fontSize: '0.85rem',
                                            textTransform: 'none',
                                            px: 1.5,
                                            py: 0.8,
                                            borderRadius: '8px',
                                            backgroundColor: isActive ? 'rgba(144,202,249,0.08)' : 'transparent',
                                            '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.05)' },
                                            transition: 'all 0.2s ease',
                                            position: 'relative',
                                        }}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <Box sx={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 16, height: 2, borderRadius: 1, backgroundColor: '#90caf9' }} />
                                        )}
                                    </Button>
                                </motion.div>
                            );
                        })}

                        <Button
                            component={Link}
                            to="/contact"
                            variant="outlined"
                            size="small"
                            sx={{
                                ml: 1.5,
                                color: '#90caf9',
                                borderColor: 'rgba(144,202,249,0.4)',
                                textTransform: 'none',
                                fontWeight: 700,
                                fontSize: '0.82rem',
                                borderRadius: '8px',
                                px: 2,
                                '&:hover': { backgroundColor: 'rgba(144,202,249,0.08)', borderColor: '#90caf9' },
                            }}
                        >
                            Hire Me
                        </Button>
                    </Box>

                    {/* Mobile menu button */}
                    <IconButton
                        sx={{ display: { xs: 'flex', md: 'none' }, color: 'rgba(255,255,255,0.7)' }}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: 260,
                        backgroundColor: '#0d0d14',
                        borderLeft: '1px solid rgba(255,255,255,0.06)',
                        p: 2,
                    }
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Typography sx={{ color: '#90caf9', fontWeight: 700, fontSize: '0.9rem' }}>Menu</Typography>
                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'rgba(255,255,255,0.5)' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.to;
                        return (
                            <ListItem key={link.to} sx={{ p: 0 }}>
                                <Button
                                    component={Link}
                                    to={link.to}
                                    onClick={() => setDrawerOpen(false)}
                                    fullWidth
                                    sx={{
                                        justifyContent: 'flex-start',
                                        color: isActive ? '#90caf9' : 'rgba(255,255,255,0.55)',
                                        fontWeight: isActive ? 700 : 500,
                                        fontSize: '0.95rem',
                                        textTransform: 'none',
                                        borderRadius: '10px',
                                        px: 2, py: 1.2,
                                        backgroundColor: isActive ? 'rgba(144,202,249,0.08)' : 'transparent',
                                        '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.05)' },
                                    }}
                                >
                                    {link.label}
                                </Button>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;