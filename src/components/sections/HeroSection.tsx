import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Wave from '../ui/Wave';
import arifImage from '../../assets/arif.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-visual">
          <div className="profile-wrapper">
            <img src={arifImage} alt="Arif Hidayat" className="profile-img" />
            <div className="status-badge">
              <span className="pulse"></span>
              Available for Hire
            </div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to my portfolio!</h1>
          <p className="hero-description">
            I have a degree in Software Engineering from the University of Computer Indonesia 
            and I am interested in Software Development, Web Development, Software Architecture 
            and related areas.
          </p>
          <p className="hero-description">
            I started in the technology area when I was a teenager, even without knowing 
            that I was manipulating javascript, html and css I used them to make adjustments 
            in an RPG blog. After that I took a technical course where I learned basic computer 
            and programming concepts and realized that this is what I wanted to do.
          </p>
          
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/arif-hidayat-8b173212b/" target="_blank" rel="noopener noreferrer" className="social-btn"><FaLinkedin size={20} /></a>
            <a href="https://github.com/arifhidayat65" target="_blank" rel="noopener noreferrer" className="social-btn"><FaGithub size={20} /></a>
            <a href="https://twitter.com/Arifhidayat65" target="_blank" rel="noopener noreferrer" className="social-btn"><FaTwitter size={20} /></a>
            <a href="https://www.facebook.com/arifefhidayat/" target="_blank" rel="noopener noreferrer" className="social-btn"><FaFacebook size={20} /></a>
          </div>

          <div className="hero-actions">
            <a href="#" className="btn btn-primary">Download CV</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
      <Wave color="var(--bg-secondary)" />
    </section>
  );
};

export default HeroSection;
