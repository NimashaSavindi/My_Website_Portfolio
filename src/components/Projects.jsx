import mangoImg from "../assets/images/mango.png";
import travelImg from "../assets/images/travel.png";
import diabetesImg from "../assets/images/diabetes.jfif";
import fungiImg from "../assets/images/fungi.png";
import textEditorImg from "../assets/images/texteditor.jpg";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title:
        "Mango Ripeness Classification & Health Recommendation System",

      featured: true,

      image: mangoImg,

      description:
        "AI-powered mango ripeness classification and health recommendation system using machine learning, ESP32 IoT sensors and Flutter integration.",

      tech: [
        "Python",
        "TensorFlow",
        "Scikit-Learn",
        "ESP32",
        "Flutter",
        "Flask",
      ],

      date: "2025 - 2026",

      github: "https://github.com/NimashaSavindi/AI-Based-IoT-System-for-Non-Destructive-Ripeness-Detection",
      demo: "",
    },

    {
      title: "AI Travel Web Application",

      image: travelImg,

      description:
        "AI travel assistant with chatbot support, itinerary generation and destination recommendations.",

      tech: [
        "React",
        "AI Chatbot",
        "Node.js",
      ],

      date: "2026",

      github: "https://github.com/NimashaSavindi/AI-Assisted-Travel-Web-Application-with-Chatbot",

      demo:
        "https://sri-lanka-dreams-unfold.lovable.app/",
    },

    {
      title: "Diabetes Risk Prediction",

      image: diabetesImg,

      description:
        "AI-powered diabetes risk prediction system using neural networks to analyze lifestyle and health factors for early detection and preventive healthcare recommendations.",

      tech: [
        "Python",
        "Scikit-Learn",
        "Google Colab",
      ],

      date: "2025",

      github:
        "https://github.com/NimashaSavindi/Diabetes-Risk-Prediction",

      demo: "",
    },

    {
      title: "Fungi Colony Detection",

      image: fungiImg,

      description:
        "Computer vision system for automatic fungi colony detection and classification using image processing and machine learning techniques.",

      tech: [
        "Python",
        "OpenCV",
        "Machine Learning",
        "Image Processing",
      ],

      date: "2024",

      github: "https://github.com/NimashaSavindi/Fungal-Colony-Detection",
      demo: "",
    },

    {
  title: "Qt Text Editor",

  image: textEditorImg,

  description:
    "Feature-rich desktop text editor developed using the Qt Framework with document management, rich text formatting, file operations, and an intuitive graphical user interface.",

  tech: [
    "C++",
    "Qt Framework",
    "Qt Creator",
    "Desktop Application",
  ],

  date: "2024",

  github: "https://github.com/NimashaSavindi/Desktop-Text-Editor",

  demo: "",
  
},
  ];

  return (
    <section
      className="projects"
      id="projects"
    >
      <h2 className="section-title">
        Projects
      </h2>

      <p className="section-subtitle">
        Artificial Intelligence, Machine Learning and Software Development Projects
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              project.featured
                ? "featured-project"
                : ""
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className={
                project.title === "Qt Text Editor"
                  ? "project-image qt-image"
                  : "project-image"
              }
            />


            <div className="project-content">
              <span className="project-date">
                {project.date}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="tech-badge"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;