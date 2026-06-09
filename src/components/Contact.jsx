import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Contact Me
      </h2>

      <p className="section-subtitle">
        Seeking internship opportunities in Artificial Intelligence, Machine Learning, Data Science, and Software Engineering.
      </p>

      <div className="contact-grid">

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nimashasavi001@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <span className="contact-label">
            Click to send an email
          </span>

          <p>
            nimashasavi001@gmail.com
          </p>
        </a>

        <a
          href="http://www.linkedin.com/in/nimasha-savindi-b0973b224"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />

          <h3>LinkedIn</h3>

          <span className="contact-label">
            Professional Network
          </span>

          <p>
            linkedin.com/in/nimasha-savindi
          </p>
        </a>

        <a
          href="https://github.com/NimashaSavindi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <span className="contact-label">
            View My Projects
          </span>

          <p>
            github.com/NimashaSavindi
          </p>
        </a>

      </div>
    <div className="contact-cta">

</div>

    </section>
  );
}

export default Contact;