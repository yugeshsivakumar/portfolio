

interface PortfolioProps {
  isActive: boolean;
}

const Portfolio = ({ isActive }: PortfolioProps) => {
  const projects = [
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
      href: 'https://uylldcq2c8gqozomeofkgr.streamlit.app/',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*B6ng0DrYAUWo7iCW.jpg',
      alt: 'Touch Typing Analysis',
      category: 'Web',
      title: 'Touch Typing Analysis',
      tech: 'Python + Streamlit',
    },
    {
      href: 'https://lovely-sprinkles-82a385.netlify.app/',
      image: 'https://oscarlp6.dev/images/articles/Obsidian-Knowledgebase/cover-en.png',
      alt: 'Obsidian knowledge-base',
      category: 'Web',
      title: 'Obsidian knowledge-base',
      tech: 'Netlify',
    },
    {
      href: 'https://github.com/yugeshsivakumar/Clustering-with-FiftyOne',
      image: 'https://docs.voxel51.com/_images/clustering_preview.jpg',
      alt: 'Clustering with FiftyOne',
      category: 'Jupyter notebook',
      title: 'Clustering with FiftyOne',
      tech: 'Python + FiftyOne',
    },
    {
      href: 'https://github.com/yugeshsivakumar/Generative-Adversarial-Networks-for-Image-Creation',
      image: 'https://editor.analyticsvidhya.com/uploads/393951_t78gwhhw-hn1CgXc1K89wA.png',
      alt: 'Generative Adversarial Networks for Image Generation',
      category: 'Jupyter notebook',
      title: 'Generative Adversarial Networks for Image Generation',
      tech: 'Python',
    },
  ];

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
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
