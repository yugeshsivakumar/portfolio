import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <main>
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="contact" />
        <Contact isActive={true} />
      </div>
    </main>
  );
};

export default ContactPage;
