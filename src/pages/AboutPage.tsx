import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <main>
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="about" />
        <About isActive={true} />
      </div>
    </main>
  );
};

export default AboutPage;
