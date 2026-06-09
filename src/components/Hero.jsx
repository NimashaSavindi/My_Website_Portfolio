import homeImage from "../assets/images/Hero.png";
import resume from "../assets/CV/Nimasha_Savindi.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">


        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          Nimasha Savindi
        </h1>

        <h2>
          IT Undergraduate &
          <span className="gradient-text">
            {" "}AI/ML Enthusiast
          </span>
        </h2>

        <p className="hero-description">
          Passionate IT undergraduate focused on building intelligent solutions through Artificial Intelligence , Machine Learning , Data Science and Software Engineering
        </p>


        <div className="hero-buttons">
          <a
            href={resume}
            download
            className="primary-btn"
          >
            Download Resume
          </a>
        </div>

      </div>

      <div className="hero-image">

        <div className="avatar-glow"></div>

        <div className="image-ring">
          <img
            src={homeImage}
            alt="Nimasha Savindi"
            className="profile-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;