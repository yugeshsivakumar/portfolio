import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ activePage }: { activePage?: string }) => {
  const location = useLocation();
  
  const pages = [
    { id: 'about', label: 'About', path: '/' },
    { id: 'resume', label: 'Resume', path: '/resume' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'portfolio', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  const getActiveState = (page: typeof pages[0]) => {
    if (activePage) {
      return activePage === page.id;
    }
    return location.pathname === page.path;
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li className="navbar-item" key={page.id}>
            <Link
              to={page.path}
              className={`navbar-link ${getActiveState(page) ? 'active' : ''}`}
              data-nav-link
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
