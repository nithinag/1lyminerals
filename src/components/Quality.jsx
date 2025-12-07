import './Quality.css';

const Quality = () => {
  const qualitySteps = [
    {
      step: '01',
      title: 'R.O. Processed',
      description: 'Advanced Reverse Osmosis removes all contaminants and impurities',
      icon: '🔬'
    },
    {
      step: '02',
      title: 'U.V. Treated',
      description: 'Ultraviolet treatment ensures complete disinfection',
      icon: '💡'
    },
    {
      step: '03',
      title: 'Ozonised',
      description: 'Ozone treatment for lasting freshness and safety',
      icon: '💨'
    },
    {
      step: '04',
      title: 'Mineral Enriched',
      description: 'Essential minerals added for health benefits',
      icon: '⚡'
    }
  ];

  const certifications = [
    {
      name: 'FSSAI',
      description: 'Food Safety and Standards Authority of India',
      icon: '✓'
    },
    {
      name: 'BIS',
      description: 'Bureau of Indian Standards',
      icon: '✓'
    }
  ];

  return (
    <section className="quality section" id="quality">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Quality Standards</span>
          <h2>Impeccable Quality at Every Step</h2>
          <p className="section-subtitle">
            Multi-stage purification process ensuring purity in every drop
          </p>
        </div>

        <div className="quality-content">
          {/* Purification Process */}
          <div className="purification-process">
            <h3 className="text-center">Our Purification Journey</h3>
            <div className="process-timeline">
              {qualitySteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {index < qualitySteps.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications-section">
            <h3 className="text-center">Certified Trust</h3>
            <p className="certifications-intro text-center">
              Fully compliant with national safety and quality standards
            </p>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-badge">
                    <div className="cert-icon">{cert.icon}</div>
                  </div>
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Commitment */}
          <div className="quality-commitment">
            <div className="commitment-grid">
              <div className="commitment-item">
                <div className="commitment-icon">🎯</div>
                <h4>100% Safe</h4>
                <p>Every drop tested for safety and purity</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">🏭</div>
                <h4>Modern Facility</h4>
                <p>State-of-the-art manufacturing plants</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">🔍</div>
                <h4>Rigorous Testing</h4>
                <p>Multiple quality checkpoints</p>
              </div>
              <div className="commitment-item">
                <div className="commitment-icon">🌱</div>
                <h4>Eco-Responsible</h4>
                <p>Sustainable and environmentally conscious</p>
              </div>
            </div>
          </div>

          {/* Environmental Message */}
          <div className="environmental-message">
            <div className="env-icon">♻️</div>
            <div className="env-content">
              <h3>Crush the Bottle After Use</h3>
              <p>
                We're committed to environmental responsibility. Please crush and recycle 
                your bottle after use to help us protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;







