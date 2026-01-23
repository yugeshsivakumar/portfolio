import { BookOpen } from 'lucide-react';

interface ResumeProps {
  isActive: boolean;
}

const Resume = ({ isActive }: ResumeProps) => {
  const education = [
    {
      title: "St. Joseph's college of engineering",
      period: '2021-2025',
      description: 'BE EEE',
      link: 'https://stjosephs.ac.in/', 
    },
    {
      title: 'Sri Bharathidasan Matriculation Hr Sec School',
      period: '2019 — 2021',
      description: 'High School',
    },
    {
      title: 'Ashoka Sishu Vihar Matriculation School',
      period: '2007 — 2019',
      description: 'Elementary School',
    },
  ];

  const experience = [
    {
      title: 'Kerckhoffs ltd',
      period: 'Sep 2025 - Current',
      description: 'AI Engineer Intern',
      link: 'https://www.kerckhoffs.ltd/',
    },
    {
      title: 'Phosphene AI',
      period: 'Aug 2024 - Jan 2025',
      description: 'Machine Learning Intern',
      link: 'https://www.authenta.ai/',
    },
    {
      title: 'Quantium',
      period: 'Jul 2024 - Aug 2024',
      description: 'Data Analyst Intern',
      link: 'https://quantium.com/',
    },
    {
      title: 'Up2datez',
      period: 'May 2024 - Jun 2024',
      description: 'Data Scientist and Machine Learning Intern',
      link: 'http://up2datez.com/',
    },
  ];

  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h1 className="h2 article-title">Resume</h1>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={16} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li className="timeline-item" key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-item-title-link"
              >
                <h4 className="h4 timeline-item-title">{item.title}</h4>
              </a>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={16} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li className="timeline-item" key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-item-title-link"
              >
                <h4 className="h4 timeline-item-title">{item.title}</h4>
              </a>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="button-container">
        <a
          href="https://drive.google.com/file/d/1h9t6N57gQSxa9cAgOa45cIrX0usaKjXD/view"
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </article>
  );
};

export default Resume;