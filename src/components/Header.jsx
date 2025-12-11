import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <img src="/logo.svg" alt="1LY MINERALS Logo" className="logo-image" />
            <div className="logo-text-wrapper">
            <span className="logo-text">1LY</span>
            <span className="logo-sub">MINERALS</span>
            </div>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('main-content')}>About</a></li>
            <li><a onClick={() => scrollToSection('products')}>Products</a></li>
            <li><a onClick={() => scrollToSection('quality')}>Quality</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <a href="tel:+917090009669" className="btn btn-primary">
              Call Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;







