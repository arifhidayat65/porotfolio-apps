import { usePortfolioData } from '../../hooks/usePortfolioData';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const { experiences, isLoading } = usePortfolioData();

  if (isLoading) return null;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiences.</h2>
          <hr className="title-line" />
        </div>

        <div className="experience-content">
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    {exp.image && <img src={exp.image} alt={exp.company} className="company-logo" />}
                    <div className="experience-info">
                      <span className="period">{exp.period}</span>
                      <h4 className="title">{exp.role}</h4>
                      <h5 className="place">{exp.company}</h5>
                    </div>
                  </div>
                  <p className="description">{exp.description}</p>
                  <div className="skills-tags">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
