import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { usePortfolioData } from '../../hooks/usePortfolioData';
import type { Project } from '../../types';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const { projects, isLoading } = usePortfolioData();
  const [filter, setFilter] = useState<'All' | 'Web' | 'Design' | 'Mobile'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  if (isLoading) return null;

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Latest Works.</h2>
        </motion.div>

        <div className="filter-buttons">
          {(['All', 'Web', 'Design', 'Mobile'] as const).map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="projects-grid"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-card"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <div className="overlay-links">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="overlay-icon-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="overlay-icon-btn primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && <span className="tag">+{project.tags.length - 3}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal-content"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="modal-body">
                <div className="modal-media-section">
                  <div className={`modal-main-image-wrapper ${selectedProject.category === 'Mobile' ? 'is-mobile' : ''}`}>
                    {selectedProject.images && selectedProject.images.length > 0 ? (
                      <>
                        <img 
                          src={selectedProject.images[currentImageIndex]} 
                          alt={`${selectedProject.title} screenshot`} 
                          className="modal-main-img"
                        />
                        {selectedProject.images.length > 1 && (
                          <>
                            <button 
                              className="nav-btn prev"
                              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images!.length - 1 : prev - 1))}
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button 
                              className="nav-btn next"
                              onClick={() => setCurrentImageIndex((prev) => (prev === selectedProject.images!.length - 1 ? 0 : prev + 1))}
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      <img src={selectedProject.image} alt={selectedProject.title} className="modal-main-img" />
                    )}
                  </div>
                  
                  {/* Thumbnails */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="modal-thumbnails">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          className={`thumbnail-btn ${currentImageIndex === idx ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(idx)}
                        >
                          <img src={img} alt="" className="thumbnail-img" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="modal-info-section">
                  <div className="modal-header-meta">
                    <span className="modal-category">{selectedProject.category}</span>
                  </div>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-tags-section">
                    <h4>Technologies</h4>
                    <div className="modal-tags">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="modal-btn github-btn"
                      >
                        <FaGithub size={20} style={{ marginRight: '8px' }} />
                        GitHub
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== '#' && (
                      <a 
                        href={selectedProject.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="modal-btn demo-btn"
                      >
                        <ExternalLink size={20} style={{ marginRight: '8px' }} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
