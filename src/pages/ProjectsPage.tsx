import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import SEO from '@/components/SEO';

const ProjectsPage = () => {
  return (
    <main>
      <SEO
        title="Projects by Yugesh S | Portfolio"
        description="Explore innovative projects by Yugesh S including web applications, data science projects, machine learning models, and more. View source code and live demos."
        canonical="/projects"
      />
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="portfolio" />
        <Portfolio isActive={true} />
      </div>
    </main>
  );
};

export default ProjectsPage;