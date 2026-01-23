import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import SEO from '@/components/SEO';

const ContactPage = () => {
  return (
    <main>
      <SEO
        title="Contact Yugesh S | Portfolio"
        description="Get in touch with Yugesh S for collaboration, job opportunities, or project inquiries. Software and Data Engineer based in Chennai, India."
        canonical="/contact"
      />
      <Sidebar avatarSrc="/images/my-avatar.png" />
      
      <div className="main-content">
        <Navbar activePage="contact" />
        <Contact isActive={true} />
      </div>
    </main>
  );
};

export default ContactPage;