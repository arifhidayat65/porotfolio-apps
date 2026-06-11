import { skillAssets } from '../../api/portfolioApi';
import './SkillsSection.css';

const skillGroups = [
  {
    title: 'Language',
    skills: [
      { name: 'Python', icon: skillAssets.python },
      { name: 'Javascript', icon: skillAssets.javascript },
      { name: 'TypeScript', icon: skillAssets.javascript }, // Uses JS icon if TS icon missing
      { name: 'Java', icon: skillAssets.java },
      { name: 'C#', icon: skillAssets.csharp },
      { name: 'C', icon: skillAssets.c },
      { name: 'PHP', icon: skillAssets.php },
      { name: 'SQL', icon: null },
    ]
  },
  {
    title: 'Front-end & Web',
    skills: [
      { name: 'HTML5', icon: skillAssets.html },
      { name: 'CSS3', icon: skillAssets.css },
      { name: 'Bootstrap', icon: skillAssets.bootstrap },
      { name: 'React', icon: skillAssets.react },
      { name: 'Vue', icon: skillAssets.vue },
    ]
  },
  {
    title: 'Design Tools',
    skills: [
      { name: 'Figma', icon: skillAssets.figma },
      { name: 'Adobe XD', icon: skillAssets.xd },
      { name: 'Photoshop', icon: skillAssets.photoshop },
      { name: 'Illustrator', icon: skillAssets.illustrator },
    ]
  },
  {
    title: 'Other Tools',
    skills: [
      { name: 'Git', icon: skillAssets.git },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="skills bg-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills.</h2>
          <hr className="title-line" />
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (group.skills.some(s => s.icon) && (
            <div key={index} className="skill-card">
              <h3 className="group-title">{group.title}</h3>
              <div className="skills-icons-grid">
                {group.skills.map((skill, sIdx) => skill.icon && (
                  <div key={sIdx} className="skill-icon-item" title={skill.name}>
                    <img src={skill.icon} alt={skill.name} className="skill-logo" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
