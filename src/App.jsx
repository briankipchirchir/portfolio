import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/About';
import ProjectsSection from './components/Projects';
import SkillsSection from './components/Skills';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScrollUpSection from './components/ScrollUpSection'; // Import the ScrollUpSection component

// Create theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#ff4081', // Pink
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <ScrollUpSection>
                <HeroSection />
              </ScrollUpSection>
              <ScrollUpSection>
                <AboutSection />
              </ScrollUpSection>
              <ScrollUpSection>
                <ProjectsSection />
              </ScrollUpSection>
              <ScrollUpSection>
                <SkillsSection />
              </ScrollUpSection>
              <ScrollUpSection>
                <ContactSection />
              </ScrollUpSection>
            </>
          } />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/skills" element={<SkillsSection/>} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
