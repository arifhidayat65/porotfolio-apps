import { motion } from 'framer-motion';
import { Cloud, Code2, Palette, Server } from 'lucide-react';
import type { ReactNode } from 'react';
import { skillAssets } from '../../api/portfolioApi';
import './SkillsSection.css';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillGroupData {
  title: string;
  icon: ReactNode;
  className: string;
  skills: Skill[];
}

const skillGroups: SkillGroupData[] = [
  {
    title: 'Backend & Architecture',
    icon: <Server size={24} />,
    className: 'dev-group',
    skills: [
      { name: 'Node.js' },
      { name: 'TypeScript', icon: skillAssets.javascript },
      { name: 'Python · Django', icon: skillAssets.python },
      { name: 'Java · Spring Boot', icon: skillAssets.java },
      { name: 'Go' },
      { name: 'PHP · Laravel', icon: skillAssets.php },
      { name: 'Microservices' },
      { name: 'Event-Driven APIs' },
      { name: 'SQL · NoSQL' },
    ]
  },
  {
    title: 'Product & UX',
    icon: <Palette size={24} />,
    className: 'design-group',
    skills: [
      { name: 'Figma', icon: skillAssets.figma },
      { name: 'UI/UX Design' },
    ]
  },
  {
    title: 'Frontend & Mobile',
    icon: <Code2 size={24} />,
    className: 'frontend-group',
    skills: [
      { name: 'React', icon: skillAssets.react },
      { name: 'Vue', icon: skillAssets.vue },
      { name: 'JavaScript', icon: skillAssets.javascript },
      { name: 'React Native' },
      { name: 'HTML5', icon: skillAssets.html },
      { name: 'CSS3', icon: skillAssets.css },
    ]
  },
  {
    title: 'Cloud, Data & DevOps',
    icon: <Cloud size={24} />,
    className: 'tools-group',
    skills: [
      { name: 'AWS' },
      { name: 'Google Cloud' },
      { name: 'Docker' },
      { name: 'CI/CD' },
      { name: 'PostgreSQL' },
      { name: 'MySQL · Oracle' },
      { name: 'Cassandra' },
      { name: 'Firebase' },
      { name: 'Git', icon: skillAssets.git },
    ]
  },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills.</h2>
        </motion.div>

        <motion.div 
          className="skills-bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index} 
              className={`skill-bento-card ${group.className}`}
              variants={itemVariants}
            >
              <h3 className="group-title">
                <span className="group-icon-wrapper">{group.icon}</span>
                {group.title}
              </h3>
              <div className="skills-flex">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge" title={skill.name}>
                    {skill.icon && <img src={skill.icon} alt="" className="skill-logo" />}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
