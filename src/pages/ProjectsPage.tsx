import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';

const ProjectsPage = () => {
  return (
    <main>
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="portfolio" />
        <Portfolio isActive={true} />
      </div>
    </main>
  );
};

export default ProjectsPage;
