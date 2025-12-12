import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-col">
              <div className="footer-logo">
                <img src="/logo.svg" alt="ILY MINERALS Logo" className="footer-logo-image" />
                <div className="footer-logo-text-wrapper">
                <span className="logo-text">ILY</span>
                <span className="logo-sub">MINERALS</span>
                </div>
              </div>
              <p className="footer-tagline">
                The Tradition of Trust
              </p>
              <p className="footer-description">
                Premium packaged drinking water enriched with essential minerals. Industry leader in reliability, serving millions across India.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#main-content">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#quality">Quality Standards</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="footer-col">
              <h4>Our Products</h4>
              <ul className="footer-links">
                <li>Mineral Enriched Water</li>
                <li>Premium Packaged Water</li>
                <li>FSSAI Certified</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
                  <span>#128, Avalahalli, Bangalore <br /> - 560 049</span>
                </li>
                <li>
                  <span className="contact-icon"><i className="fas fa-phone"></i></span>
                  <a href="tel:+917090009669">+91 7090009669</a>
                </li>
                <li>
                  <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                  <a href="mailto:1lyminerals@gmail.com">1lyminerals@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom - Combined Layout */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              {/* Left Side - Copyright */}
              <div className="footer-copyright-section">
                <p className="copyright">
                  © {currentYear} ILY MINERALS. All rights reserved.
                </p>
              </div>

              {/* Right Side - Connect With Us Section */}
              <div className="footer-social-section">
                <h4 className="social-heading">Connect With Us</h4>
                <div className="social-icons">
                  <a href="https://www.facebook.com/share/1BdXc3mBDX/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCUQ_zBeZE66kvrGM7g8lB5Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.instagram.com/1ly_minerals?igsh=MW5zaGtocGdkY2ZudA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="http://www.linkedin.com/in/1ly-minerals-008006394" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <div className="footer-badges">
                  <span className="badge">
                    <i className="fas fa-certificate"></i> FSSAI Certified
                  </span>
                  <span className="badge">
                    <i className="fas fa-leaf"></i> Eco-Friendly
                  </span>
                </div>
              </div>
            </div>
            <div className="developer-credit">
              <p>
                For questions regarding the website's performance or design, please contact the developer,{' '}
                <a 
                  href="https://www.linkedin.com/in/nithinnagabushanam6611" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="developer-link"
                >
                  NITHIN NAGABUSHANAM
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;







