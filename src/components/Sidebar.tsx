import { useState } from 'react';
import { ChevronDown, Mail, Calendar, MapPin, Linkedin, Github, Globe } from 'lucide-react';

// Custom Medium icon as it's not in lucide-react
const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

interface SidebarProps {
  avatarSrc: string;
}

const Sidebar = ({ avatarSrc }: SidebarProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        {/* Animated Avatar Box */}
        <div className="animated-avatar-box">
          <div className="animated-profile-frame">
            {/* Outer Border */}
            <div className="animated-profile-border"></div>
            
            {/* Dark Gradient Overlay */}
            <div className="animated-profile-overlay"></div>
            
            {/* Profile Image */}
            <img 
              src={avatarSrc} 
              alt="Yugesh S" 
              className="animated-profile-img" 
              loading="lazy" 
            />
            
            {/* Hover Effects */}
            <div className="animated-profile-effects">
              {/* Shine Effects */}
              <div className="animated-shine-1"></div>
              <div className="animated-shine-2"></div>
            </div>
          </div>
        </div>

        <div className="info-content">
          <h1 className="name" title="Yugesh S">Yugesh S</h1>
          <p className="title">Software & AI Engineer</p>
        </div>

        <button 
          className="info_more-btn" 
          data-sidebar-btn 
          onClick={toggleSidebar}
          aria-label={isActive ? 'Hide Contacts' : 'Show Contacts'}
        >
          <span className="info_more-btn-text">Show Contacts</span>
          <ChevronDown size={16} className={`chevron-icon ${isActive ? 'rotated' : ''}`} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:contact@yugesh.me" className="contact-link">contact@yugesh.me</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Calendar size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2003-10-28">OCT 28, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={16} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Chennai, TamilNadu, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/yugeshsivakumar/" className="social-link social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={18} />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/yugeshsivakumar" className="social-link social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github size={18} />
            </a>
          </li>
          <li className="social-item">
            <a href="https://medium.com/@Yugesh_S" className="social-link social-btn" target="_blank" rel="noopener noreferrer" aria-label="Medium Blog">
              <MediumIcon />
            </a>
          </li>
          <li className="social-item">
            <a href="https://yugesh.me/shop" className="social-link social-btn" target="_blank" rel="noopener noreferrer" aria-label="Personal Website">
              <Globe size={18} />
            </a>
          </li>
        </ul>

        <div className="button-container">
          <a href="https://ieeexplore.ieee.org/author/142173155377928" className="download-button" target="_blank" rel="noopener noreferrer">
            Publications
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
