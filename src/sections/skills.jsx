import { FaJava, FaPython, FaNodeJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiC, SiCplusplus, SiAndroid, SiKotlin, SiFirebase, SiFlutter , SiPhp, SiOracle } from 'react-icons/si';

const skills = [
  { name: 'Android', icon: <SiAndroid /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'C', icon: <SiC /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'SQL', icon: <SiOracle /> },
  { name: 'PLSQL', icon: <SiOracle /> },
  { name: 'MongoDB', icon: <DiMongodb /> },
  { name: 'MySQL', icon: <DiMysql /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skill-cards">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;
