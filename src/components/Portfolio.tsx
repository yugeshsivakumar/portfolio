

interface PortfolioProps {
  isActive: boolean;
}

const Portfolio = ({ isActive }: PortfolioProps) => {
  const projects = [
    {
      href: 'https://oneai.yugesh.me',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VAGt6Sqi1lQOcGYu9UHgiQ.jpeg',
      alt: 'One-AI',
      category: 'Chatbot',
      title: 'One AI',
      tech: 'Python + TS',
    },
    {
      href: 'https://github.com/yugeshsivakumar/Finetune_llm',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s0-QWUqpCo3vDwMkkkrg2A.png',
      alt: 'Finetune SLM',
      category: 'Jupyter notebook',
      title: 'Finetune SLM',
      tech: 'Python',
    },
    {
      href: 'https://yugesh.me/shop',
      image: 'https://www.techyleaf.in/wp-content/uploads/2023/04/What-20is-20Affiliate-20Marketing-20.webp',
      alt: 'Affiliate Website',
      category: 'Web',
      title: 'Affiliate Website',
      tech: 'Typescript + React',
    },
    {
      href: 'https://yugeshsivakumar.github.io/Financial-Tools-Web/',
      image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/0*jTZPO3p3WmdO5FVM',
      alt: 'Financial-Tools-Web',
      category: 'Web',
      title: 'Financial-Tools-Web',
      tech: 'Html + CSS + JS',
    },
    {
      href: 'https://github.com/yugeshsivakumar/deepsearch-rag',
      image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*Mtf_nojvfl-05XhiwvCJQA.jpeg',
      alt: 'AI-powered search engine',
      category: 'Web',
      title: 'AI-powered search engine',
      tech: 'Python + html + CSS',
    },
    {
      href: 'https://lovely-sprinkles-82a385.netlify.app/',
      image: 'https://oscarlp6.dev/images/articles/Obsidian-Knowledgebase/cover-en.png',
      alt: 'Obsidian knowledge-base',
      category: 'Web',
      title: 'Obsidian knowledge-base',
      tech: 'Netlify',
    },
  ];

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h1 className="h2 article-title">Projects</h1>
      </header>

      <section className="blog">
        <ul className="blog-posts-list">
          {projects.map((project, index) => (
            <li className="blog-post-item" key={index}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{project.category}</p>
                  </div>
                  <h3 className="h3 blog-item-title">{project.title}</h3>
                  <p className="blog-text">{project.tech}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="button-container">
        <a
          href="https://github.com/yugeshsivakumar?tab=repositories"
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          For more Projects
        </a>
      </div>
    </article>
  );
};

export default Portfolio;
