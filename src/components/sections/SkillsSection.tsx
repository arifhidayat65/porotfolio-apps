import { motion } from 'framer-motion';
import { skillAssets } from '../../api/portfolioApi';
import './SkillsSection.css';

const skillGroups = [
  {
    title: 'Development',
    className: 'dev-group',
    skills: [
      { name: 'Python', icon: skillAssets.python },
      { name: 'Javascript', icon: skillAssets.javascript },
      { name: 'TypeScript', icon: skillAssets.javascript },
      { name: 'Java', icon: skillAssets.java },
      { name: 'C#', icon: skillAssets.csharp },
      { name: 'PHP', icon: skillAssets.php },
      { name: 'React', icon: skillAssets.react },
      { name: 'Vue', icon: skillAssets.vue },
    ]
  },
  {
    title: 'Design',
    className: 'design-group',
    skills: [
      { name: 'Figma', icon: skillAssets.figma },
      { name: 'Adobe XD', icon: skillAssets.xd },
      { name: 'Photoshop', icon: skillAssets.photoshop },
      { name: 'Illustrator', icon: skillAssets.illustrator },
    ]
  },
  {
    title: 'Core & Tools',
    className: 'tools-group',
    skills: [
      { name: 'HTML5', icon: skillAssets.html },
      { name: 'CSS3', icon: skillAssets.css },
      { name: 'Git', icon: skillAssets.git },
      { name: 'Bootstrap', icon: skillAssets.bootstrap },
    ]
  }
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
              <h3 className="group-title">{group.title}</h3>
              <div className="skills-flex">
                {group.skills.map((skill, sIdx) => skill.icon && (
                  <div key={sIdx} className="skill-badge" title={skill.name}>
                    <img src={skill.icon} alt={skill.name} className="skill-logo" />
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
