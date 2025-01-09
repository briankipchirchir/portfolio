import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    // Handle scroll-based background change
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: '#121212',
                boxShadow: scrolled ? '0px 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo with enhanced visuals */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #00bcd4, #006064)', // Gradient background
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 0 15px rgba(0, 188, 212, 0.6)', // Glow effect
                            position: 'relative',
                            '&:hover': {
                                transform: 'scale(1.1)', // Zoom effect on hover
                                transition: 'all 0.3s ease-in-out',
                            },
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                top: '-5px',
                                left: '-5px',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                border: '3px solid transparent',
                                borderTopColor: '#00bcd4',
                                animation: 'spin 2s linear infinite', // Rotating border
                            },
                            '@keyframes spin': {
                                '0%': { transform: 'rotate(0deg)' },
                                '100%': { transform: 'rotate(360deg)' },
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                color: '#121212',
                                textTransform: 'uppercase',
                                fontFamily: '"Poppins", sans-serif', // Stylish font
                                letterSpacing: '2px',
                            }}
                        >
                            BKN
                        </Typography>
                    </Box>
                </motion.div>

                {/* Dropdown Menu Button */}
                <Box>
                    <Button
                        onClick={handleMenuOpen}
                        sx={{
                            color: 'white',
                            fontWeight: '500',
                            textTransform: 'none',
                            letterSpacing: '1px',
                            '&:hover': {
                                color: '#00bcd4',
                            },
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        Quick links
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        sx={{
                            '& .MuiPaper-root': {
                                backgroundColor: '#121212',
                                color: 'white',
                                border: '1px solid #00bcd4',
                            },
                        }}
                    >
                        {navLinks.slice().reverse().map((link, index) => (
                            <MenuItem
                                key={index}
                                onClick={handleMenuClose}
                                component="a"
                                href={link.href}
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#00bcd4',
                                        color: '#121212',
                                    },
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            >
                                {link.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
