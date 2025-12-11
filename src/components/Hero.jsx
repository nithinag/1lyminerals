import { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  const handleScrollDown = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Video Background */}
      <div className="hero-background">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video showcasing 1LY MINERALS"
        >
          <source src="/ly_Minerals.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="hero-overlay"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-tag">Industry Leader in Reliability</span>
            <h1 className="hero-title">
            Drawn from Nature,
              <br />
              <span className="text-gradient">Delivered Pure.</span>
            </h1>
            <p className="hero-description">
              <span className="hero-description-line">Premium packaged drinking water enriched with essential minerals.</span>
              <span className="hero-description-line">Experience the tradition of trust with every drop of 1LY MINERALS.</span>
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary btn-large">
                Explore Products
              </a>
              <a href="#contact" className="btn btn-secondary btn-large">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-indicator" onClick={handleScrollDown} role="button" tabIndex={0} onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleScrollDown();
          }
        }}>
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;







