import { motion, type Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Download, Send, Briefcase, Target, Users } from 'lucide-react';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import Wave from '../ui/Wave';
import './HeroSection.css';

const HeroSection = () => {
  const { profile } = usePortfolioData();

  if (!profile) return null;

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
            <img src={profile.avatar} alt={`${profile.firstName} ${profile.lastName}`} className="profile-img" />
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
            {profile.firstName} <span>{profile.lastName}</span>
          </motion.h1>
          <motion.div variants={itemVariants} className="hero-description-wrapper">
            <div className="description-item">
              <div className="description-icon">
                <Briefcase size={22} />
              </div>
              <p className="hero-description">
                Lead Software Engineer. I design and ship systems for finance, insurance, and public utilities.
              </p>
            </div>

            <div className="description-item">
              <div className="description-icon secondary">
                <Target size={22} />
              </div>
              <p className="hero-description">
                I align <strong>Business Goals</strong> with <strong>Technical Delivery</strong>.
              </p>
            </div>

            <div className="description-item">
              <div className="description-icon tertiary">
                <Users size={22} />
              </div>
              <p className="hero-description">
                I lead teams and ship products people use.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-social">
            {profile.socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-btn" title={social.platform}>
                {getSocialIcon(social.platform)}
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="hero-actions">
            <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
