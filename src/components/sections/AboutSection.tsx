import { motion } from 'framer-motion';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import Wave from '../ui/Wave';
import './AboutSection.css';

const AboutSection = () => {
  const { education } = usePortfolioData();

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
            className="education-timeline"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="sub-title">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
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
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Wave color="var(--bg-main)" flip />
    </section>
  );
};

export default AboutSection;
