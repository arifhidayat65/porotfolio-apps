import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { useAppStore } from './store/useAppStore';
import { usePortfolioData } from './hooks/usePortfolioData';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import LoadingScreen from './components/ui/LoadingScreen';
import './App.css';

// Inisialisasi QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function AppContent() {
  const { theme, setTheme } = useAppStore();
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { profile, isLoading } = usePortfolioData();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1200);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  if (isLoadingScreen || isLoading) {
    return <LoadingScreen />;
  }

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin': return <FaLinkedin size={20} />;
      case 'github': return <FaGithub size={20} />;
      case 'twitter': return <FaTwitter size={20} />;
      case 'facebook': return <FaFacebook size={20} />;
      default: return null;
    }
  };

  return (
    <div className="app">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <p>© {new Date().getFullYear()} {profile?.firstName} {profile?.lastName}. Built with Passion.</p>
              <div className="footer-social">
                {profile?.socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={social.platform}
                    className="footer-social-link"
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <motion.button 
          className="back-to-top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
