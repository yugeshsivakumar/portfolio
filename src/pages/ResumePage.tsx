import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Resume from '@/components/Resume';
import SEO from '@/components/SEO';

const ResumePage = () => {
  return (
    <main>
      <SEO
        title="Resume of Yugesh S | Portfolio"
        description="View the professional resume of Yugesh S. Education, work experience, and skills in Software Engineering, Data Science, and Machine Learning."
        canonical="/resume"
      />
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="resume" />
        <Resume isActive={true} />
      </div>
    </main>
  );
};

export default ResumePage;