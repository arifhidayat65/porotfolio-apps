import { motion, type Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Download, Send, Briefcase, Target, Users } from 'lucide-react';
import Wave from '../ui/Wave';
import arifImage from '../../assets/arif.png';
import './HeroSection.css';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-visual"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="profile-wrapper">
            <div className="profile-blob"></div>
            <img src={arifImage} alt="Arif Hidayat" className="profile-img" />
            <div className="status-badge">
              <span className="pulse"></span>
              Available for Hire
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="hero-subtitle">Hello, I'm</motion.h2>
          <motion.h1 variants={itemVariants} className="hero-title">
            Arif <span>Hidayat</span>
          </motion.h1>
          <motion.div variants={itemVariants} className="hero-description-wrapper">
            <div className="description-item">
              <Briefcase className="description-icon" size={24} />
              <p className="hero-description">
                Dedicated <strong>Project Manager</strong> with a strong foundation in Software Engineering from University of Computer Indonesia.
              </p>
            </div>
            
            <div className="description-item">
              <Target className="description-icon" size={24} />
              <p className="hero-description">
                Expert in overseeing the end-to-end lifecycle of complex projects, from <strong>Strategic Planning</strong> to <strong>System Architecture</strong>.
              </p>
            </div>

            <div className="description-item">
              <Users className="description-icon secondary" size={24} />
              <p className="hero-description secondary">
                Passionate about leading cross-functional teams, implementing <strong>Agile methodologies</strong>, and delivering high-quality digital experiences that drive growth.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-social">
            <a href="https://www.linkedin.com/in/arif-hidayat-8b173212b/" target="_blank" rel="noopener noreferrer" className="social-btn"><FaLinkedin size={20} /></a>
            <a href="https://github.com/arifhidayat65" target="_blank" rel="noopener noreferrer" className="social-btn"><FaGithub size={20} /></a>
            <a href="https://twitter.com/Arifhidayat65" target="_blank" rel="noopener noreferrer" className="social-btn"><FaTwitter size={20} /></a>
            <a href="https://www.facebook.com/arifefhidayat/" target="_blank" rel="noopener noreferrer" className="social-btn"><FaFacebook size={20} /></a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#" className="btn btn-primary">
              <Download size={18} /> Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              <Send size={18} /> Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Wave color="var(--bg-secondary)" />
    </section>
  );
};

export default HeroSection;
