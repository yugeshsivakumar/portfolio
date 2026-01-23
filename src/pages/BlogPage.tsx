import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Blog from '@/components/Blog';
import SEO from '@/components/SEO';

const BlogPage = () => {
  return (
    <main>
      <SEO
        title="Blog by Yugesh S | Portfolio"
        description="Read technical articles and insights by Yugesh S on Data Science, Machine Learning, Web Development, and technology trends."
        canonical="/blog"
      />
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="blog" />
        <Blog isActive={true} />
      </div>
    </main>
  );
};

export default BlogPage;