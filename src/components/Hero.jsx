import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="water-ripple"></div>
        <div className="water-ripple ripple-2"></div>
        <div className="water-ripple ripple-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-tag">Industry Leader in Reliability</span>
            <h1 className="hero-title">
              Pure Water,
              <br />
              <span className="text-gradient">Pure Life</span>
            </h1>
            <p className="hero-description">
              Premium packaged drinking water enriched with essential minerals. 
              Experience the tradition of trust with every drop of 1LY MINERALS.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">💧</div>
                <div className="stat-text">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Pure & Safe</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">✓</div>
                <div className="stat-text">
                  <div className="stat-number">FSSAI</div>
                  <div className="stat-label">Certified</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">⚡</div>
                <div className="stat-text">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Minerals</div>
                </div>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">Explore Products</a>
              <a href="#contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="bottle-container">
              <div className="bottle">
                <div className="bottle-cap"></div>
                <div className="bottle-body">
                  <div className="bottle-label">
                    <div className="label-logo">1LY</div>
                    <div className="label-text">MINERALS</div>
                  </div>
                  <div className="water-level"></div>
                </div>
              </div>
              <div className="bottle-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;







