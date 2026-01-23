interface BlogProps {
  isActive: boolean;
}

const Blog = ({ isActive }: BlogProps) => {
  const blogPosts = [
    {
      href: 'https://medium.com/@Yugesh_S/how-password-works-1681b67543cd?source=your_stories_page-------------------------------------',
      image: 'https://cdn-images-1.medium.com/v2/resize:fit:1000/1*DlDqhQkbB-mMdswlgWci-Q.png',
      alt: '12 Must-Have Android Apps for Self-Improvement',
      category: 'Andriod Apps',
      date: 'Mar 22, 2025',
      dateTime: '2024-03-30',
      title: '12 Must-Have Android Apps for Self-Improvement 📈',
      source: 'Medium',
    },
    {
      href: 'https://medium.com/@Yugesh_S/how-to-publish-your-obsidian-notes-online-for-free-5cfe99d60b81',
      image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*aBLj-UOj2SaRtqSN1aLNWA.png',
      alt: 'How to Publish Your Obsidian Notes Online for Free',
      category: 'Obsidian Publish',
      date: 'Mar 16, 2025',
      dateTime: '2024-06-28',
      title: 'How to Publish Your Obsidian Notes Online for Free 📝',
      source: 'Medium',
    },
    {
      href: 'https://medium.com/@Yugesh_S/career-options-competitive-exams-after-12th-c89ac22a39aa',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dC9zLPDGH82UQ8yUnBhTHg.png',
      alt: 'Career Options & Competitive Exams After 12th 🎓✨',
      category: 'Career',
      date: 'Mar 6, 2025',
      dateTime: '2024-06-25',
      title: 'Career Options & Competitive Exams After 12th 🎓✨',
      source: 'Medium',
    },
    {
      href: 'https://medium.com/@Yugesh_S/is-it-hard-to-reach-100-wpm-in-22-hours-heres-how-i-did-it-5b3a94b4a4db',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20221223150712/10-Tips-For-Improving-Your-Typing-Accuracy-and-Speed.png',
      alt: "Is It Hard to Reach 100 WPM in 22 Hours? Here's How I Did It",
      category: 'Typing',
      date: 'Jan 19, 2025',
      dateTime: '2024-06-29',
      title: "Is It Hard to Reach 100 WPM in 22 Hours? Here's How I Did It ⌨️",
      source: 'Medium',
    },
    {
      href: 'https://medium.com/@Yugesh_S/linux-laptop-tweaks-unlock-full-hardware-potential--1315ed5ce917',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*E-riFNlGCm0r4fJO',
      alt: '🐧 Linux Laptop Tweaks: Unlock Full Hardware Potential 🛠️',
      category: 'Linux',
      date: 'Dec 15, 2024',
      dateTime: '2024-08-05',
      title: '🐧 Linux Laptop Tweaks: Unlock Full Hardware Potential 🛠️',
      source: 'Medium',
    },
    {
      href: 'https://medium.com/@Yugesh_S/transform-batch-scripts-into-standalone-software-for-automation-8a7abc24897e?source=your_stories_page-------------------------------------',
      image: 'https://cdn.dribbble.com/userupload/8836214/file/original-58e5105219dea20809b111cf88030fda.jpg?resize=752x&vertical=center',
      alt: 'Transform Batch Scripts into Standalone Software for Automation',
      category: 'Batch',
      date: 'Sep 14, 2024',
      dateTime: '2024-09-14',
      title: '⚒️ Transform Batch Scripts into Standalone Software for Automation',
      source: 'Medium',
    },
  ];

  return (
    <article className={`blog ${isActive ? 'active' : ''}`} data-page="blog">
      <header>
        <h1 className="h2 article-title">Blog</h1>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <li className="blog-post-item" key={index}>
              <a href={post.href} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.dateTime}>{post.date}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.source}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="button-container">
        <a href="https://medium.com/@Yugesh_S" className="download-button" target="_blank" rel="noopener noreferrer">
          For More Blogs
        </a>
      </div>
    </article>
  );
};

export default Blog;
