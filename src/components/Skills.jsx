import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaRobot,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaBrain,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiPostman,
  SiAnaconda,
  SiFlutter,
  SiFirebase,
  SiQt,
} from "react-icons/si";
function Skills() {
  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaCode />, name: "C" },
    { icon: <FaCode />, name: "C++" },

    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },

    { icon: <FaBrain />, name: "Machine Learning" },
    { icon: <FaRobot />, name: "Artificial Intelligence" },

    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn" },

    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiMysql />, name: "MySQL" },

    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaCode />, name: "VS Code" },

    { icon: <SiAnaconda />, name: "Anaconda" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiFirebase />, name: "Firebase" },

    { icon: <SiQt />, name: "Qt Creator" },
    { icon: <FaLaptopCode />, name: "Google Colab" },
      
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        Technical Skills
      </h2>

      <p className="section-subtitle">
        Working with Modern Technologies & Development Tools
      </p>

      <div className="tech-grid">
        {skills.map((skill, index) => (
          <div
            className="tech-card"
            key={index}
          >
            <div className="tech-icon">
              {skill.icon}
            </div>

            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;