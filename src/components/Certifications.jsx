import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {

  const certifications = [

    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford University",
      year: 2026,
      badge: "Featured",
      link: "/certificates/6.png",
    },
    
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      year: 2026,
      badge: "Machine Learning",
      link: "/certificates/11.png",
    },

    {
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI",
      year: 2026,
      badge: "Machine Learning",
      link: "/certificates/2.png",
    },

    {
      title: "Unsupervised Learning, Recommenders & Reinforcement Learning",
      issuer: "DeepLearning.AI",
      year: 2026,
      badge: "Machine Learning",
      link: "/certificates/12.png",
    },

    {
      title: "AI/ML Engineer - Stage 2",
      issuer: "SLIIT",
      year: 2026,
      badge: "Advanced",
      link: "/certificates/9.png",
    },

     {
      title: "Machine Learning Terminology and Process",
      issuer: "AWS",
      year: 2026,
      badge: "AWS",
      link: "/certificates/5.png",
    },

      {
      title: "Machine Learning Essentials for Business and Technical Decision Makers",
      issuer: "AWS",
      year: 2026,
      badge: "AWS",
      link: "/certificates/1.png",
    },


    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      year: 2026,
      badge: "Data Science",
      link: "/certificates/3.png",
    },

    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      year: 2025,
      badge: "Artificial Intelligence",
      link: "/certificates/4.png",
    },

    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      year: 2025,
      badge: "Programming",
      link: "/certificates/7.png",
    },

     {
      title: "AI/ML Engineer - Stage 1",
      issuer: "SLIIT",
      year: 2025,
      badge: "Professional",
      link: "/certificates/8.png",
    },


    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      year: 2025,
      badge: "API",
      link: "/certificates/10.png",
    },
    

  ];

  const sortedCertificates = [...certifications].sort(
    (a, b) => b.year - a.year
  );

  return (
    <section className="certifications" id="certifications">

      <h2 className="section-title">
        Certifications
      </h2>

      <p className="section-subtitle">
        Professional Certifications & Continuous Learning Achievements
      </p>

      <div className="certifications-grid">

        {sortedCertificates.map((cert, index) => (

          <div
            key={index}
            className="certificate-card"
          >

            <div className="cert-top">

              <FaAward className="certificate-icon" />

              <span className="cert-badge">
                {cert.badge}
              </span>

            </div>

            <h3>{cert.title}</h3>

            <p className="certificate-issuer">
              {cert.issuer}
            </p>

            <span className="certificate-year">
              {cert.year}
            </span>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
              <FaExternalLinkAlt />
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;