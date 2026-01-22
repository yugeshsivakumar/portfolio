interface AboutProps {
  isActive: boolean;
}

const About = ({ isActive }: AboutProps) => {
  const services = [
    {
      icon: '/images/icons8-data-analysis.png',
      title: 'Data Analysis',
      description: 'Transforming raw data into actionable insights.',
    },
    {
      icon: '/images/icons8-data-science.png',
      title: 'Data Science',
      description: 'Leveraging advanced algorithms and statistical techniques to derive predictive insights and drive data-driven decision-making.',
    },
    {
      icon: '/images/icons8-web-design.png',
      title: 'Web design',
      description: 'High-quality design with a clean look.',
    },
    {
      icon: '/images/icons8-code.png',
      title: 'Web development',
      description: 'High-quality development of websites.',
    },
  ];

  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          🌟 Hi, I'm Yugesh S! I'm a passionate tech enthusiast with a strong background in data science, 
          embedded systems, and software development. 💻 Over the past year, I've honed my skills in data 
          analysis and machine learning, driving performance improvements through innovative solutions using 
          Python, SQL, and various ML libraries. 🚀 Currently, I'm diving deeper into web development and 
          database management to build robust, scalable applications. 🌐 I'm driven by a passion for 
          optimizing workflows and making data-driven decisions, with the ultimate goal of contributing to 
          the open-source community and leveraging technology for positive change. 🌱 Let's connect, 
          collaborate, and shape impactful solutions together! 🤝
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="service-icon"
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal Container (hidden by default) */}
      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn></button>
          <div className="modal-img-wrapper"></div>
          <div className="modal-content"></div>
        </section>
      </div>
    </article>
  );
};

export default About;