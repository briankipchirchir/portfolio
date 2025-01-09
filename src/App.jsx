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
import Services from './components/Services';

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
        {/* App layout using Flexbox */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          {/* Main content with flex-grow to push the footer to the bottom */}
          <div style={{ flexGrow: 1 }}>
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
                    <Services />
                  </ScrollUpSection>
                  <ScrollUpSection>
                    <ContactSection />
                  </ScrollUpSection>
                </>
              } />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/skills" element={<SkillsSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
