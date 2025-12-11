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
                <img src="/logo.svg" alt="1LY MINERALS Logo" className="footer-logo-image" />
                <div className="footer-logo-text-wrapper">
                  <span className="logo-text">1LY</span>
                  <span className="logo-sub">MINERALS</span>
                </div>
              </div>
              <p className="footer-tagline">
                The Tradition of Trust
              </p>
              <p className="footer-description">
              Premium packaged drinking water enriched with essential minerals.
              Industry leader in reliability, serving millions across India.
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
                  <span className="contact-icon">📍</span>
                  <span>Avalahalli, Bangalore - 560 049</span>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+917090009669">+91 7090009669</a>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:1lyminerals@gmail.com">1lyminerals@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} 1LY MINERALS. All rights reserved.
              </p>
              <div className="footer-badges">
                <span className="badge">✓ FSSAI Certified</span>
              
                <span className="badge">♻️ Eco-Friendly</span>
              </div>
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







