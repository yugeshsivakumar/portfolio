import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Resume from '@/components/Resume';

const ResumePage = () => {
  return (
    <main>
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="resume" />
        <Resume isActive={true} />
      </div>
    </main>
  );
};

export default ResumePage;
