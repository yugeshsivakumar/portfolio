import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Blog from '@/components/Blog';

const BlogPage = () => {
  return (
    <main>
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="blog" />
        <Blog isActive={true} />
      </div>
    </main>
  );
};

export default BlogPage;
