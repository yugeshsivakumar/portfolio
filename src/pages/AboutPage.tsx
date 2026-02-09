import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import SEO from '@/components/SEO';

const AboutPage = () => {
  return (
    <main>
      <SEO
        title="Yugesh S | Portfolio"
        description="Welcome to Yugesh S portfolio. Software and Data Engineer specializing in Machine Learning, Data Science, and Web Development. Explore my projects and experience."
        canonical="/"
      />
      <Sidebar avatarSrc="/images/my-avatar.png" />

      <div className="main-content">
        <Navbar activePage="about" />
        <About isActive={true} />
      </div>
    </main>
  );
};

export default AboutPage;