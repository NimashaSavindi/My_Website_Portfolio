import rajarataLogo from "../assets/images/Rajarata_logo.jpg";
import aatLogo from "../assets/images/AAT_logo.jpeg";

function Education() {

  const education = [
    {
      title: "Bachelor of Science in Information Technology",
      institute: "Rajarata University of Sri Lanka",
      year: "2023 - 2026",
      logo: rajarataLogo,
    },

    {
      title: "AAT Finalist",
      institute: "AAT Sri Lanka",
      year: "Completed: June 2022",
      logo: aatLogo,
    },
  ];

  return (
    <section className="education" id="education">

      <h2 className="section-title">
        Education
      </h2>

      <p className="section-subtitle">
        Academic Journey & Qualifications
      </p>

      <div className="education-list">

        {education.map((item, index) => (

          <div
            className="education-card"
            key={index}
          >

            <div className="education-logo">
              <img
                src={item.logo}
                alt={item.institute}
              />
            </div>

            <div className="education-content">

              <h3>{item.title}</h3>

              <p>{item.institute}</p>

              <span className="education-year">
                {item.year}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Education;