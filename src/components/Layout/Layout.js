import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Layout.scss';

function Layout({ children }) {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className="logo">
          <img src="https://i.imgur.com/2fsmsPf.png" alt="Logo" />
        </div>
        
        <nav className="navigation">
          <ul>
            <li>
              <button onClick={() => navigateTo('/')}>Home</button>
            </li>
            <li>
              <button onClick={() => navigateTo('/projects')}>Projects</button>
            </li>
            <li>
              <button onClick={() => navigateTo('/about')}>About Me</button>
            </li>
            <li>
              <button onClick={() => navigateTo('/contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
}

export default Layout;
