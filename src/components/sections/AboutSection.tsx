import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Zap, GraduationCap } from 'lucide-react';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import Wave from '../ui/Wave';
import './AboutSection.css';

const AboutSection = () => {
  const { education, profile } = usePortfolioData();

  if (!profile) return null;

  return (
    <section id="about" className="about bg-alt">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me.</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-visual-side"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <Award size={20} />
                </div>
                <div>
                  <span className="stat-num">8+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper secondary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="stat-num">20+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper tertiary">
                  <Users size={20} />
                </div>
                <div>
                  <span className="stat-num">10+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                  <Zap size={20} />
                </div>
                <div>
                  <span className="stat-num">15+</span>
                  <span className="stat-label">Tech Stacks</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="about-info-side">
            <motion.div 
              className="about-bio"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="sub-title"><Zap size={24} className="title-icon" /> Who I Am</h3>
              <div className="bio-text">
                {profile.description.map((para, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="education-timeline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="sub-title"><GraduationCap size={24} className="title-icon" /> Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    {edu.image && <img src={edu.image} alt={edu.name} className="education-logo" />}
                    <div className="education-info">
                      <span className="period">{edu.date}</span>
                      <h4 className="title">{edu.degree}</h4>
                      <h5 className="place">{edu.name}</h5>
                    </div>
                  </div>
                  <div className="skills-tags">
                    {edu.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Wave color="var(--bg-main)" flip />
    </section>
  );
};

export default AboutSection;
