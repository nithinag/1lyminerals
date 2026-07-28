import { useState } from 'react';
import './About.css';
import { TrophyIcon, CheckIcon, PlantIcon, FamilyIcon, GlobeIcon, WaterDropIcon } from './Icons';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section className="about section" id="main-content">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">We Are</span>
          <h2>The Tradition of Trust</h2>
          <p className="section-subtitle">
            Delivering safe, healthy, and mineral-enriched water to millions of Indian families
          </p>
        </div>

        <div className="about-content">
          {/* Left Column: Tabbed Narrative */}
          <div className="about-text">
            <div className="about-tabs">
              <button 
                className={`about-tab-btn ${activeTab === 'story' ? 'active' : ''}`}
                onClick={() => setActiveTab('story')}
              >
                Our Story
              </button>
              <button 
                className={`about-tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
              <button 
                className={`about-tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Why Choose Us
              </button>
            </div>

            {activeTab === 'story' && (
              <div className="tab-pane fade-in-fast">
                <div className="about-badge">
                  <div className="badge-icon">
                    <TrophyIcon size={32} />
                  </div>
                  <div className="badge-text">
                    <div className="badge-title">Industry Leader</div>
                    <div className="badge-subtitle">in Reliability</div>
                  </div>
                </div>

                <h3>Premium Packaged Drinking Water</h3>
                <p>
                  <strong>1LY MINERALS</strong> is a premium packaged drinking water brand headquartered 
                  in Bangalore, dedicated to delivering safe, healthy and mineral-enriched water. 
                  We position ourselves as an <strong>"Industry Leader in Reliability,"</strong> built 
                  on a strong foundation of safety and service.
                </p>
                <p>
                  Our brand is built on <strong>"The Tradition of Trust"</strong> – a commitment to 
                  ensure that every bottle consumed contributes to health and wellness. We believe 
                  that pure water is the foundation of a healthy life and we're dedicated to making 
                  premium quality water accessible to every household across India.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="tab-pane fade-in-fast">
                <div className="mission-box">
                  <h4>Our Mission</h4>
                  <p>
                    To be the reliable choice for Indian families, ensuring that every drop 
                    contributes to health and wellness while maintaining environmental responsibility.
                  </p>
                </div>

                <h3>Purity in Every Drop</h3>
                <p>
                  Our mission is anchored in reliability and pure health. By setting a benchmark for quality 
                  hydration, we ensure that families, corporations, and communities receive mineral-rich 
                  water they can trust implicitly.
                </p>
                <p>
                  We are deeply committed to sustainable practices. From optimizing our water usage to 
                  promoting responsible recycling, we strive to secure a healthier environment for 
                  generations to come.
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="tab-pane fade-in-fast">
                <div className="excellence-box">
                  <h4>Pillars of Excellence</h4>
                  <p>
                    At 1LY MINERALS, we implement multi-stage purification processes and strict FSSAI compliance 
                    to deliver mineral-fortified water that exceeds expectations.
                  </p>
                </div>

                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <CheckIcon size={14} />
                    </div>
                    <div className="feature-content">
                      <h4>Mineral Enriched</h4>
                      <p>Fortified with essential electrolytes for optimal hydration</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <CheckIcon size={14} />
                    </div>
                    <div className="feature-content">
                      <h4>FSSAI Certified</h4>
                      <p>Fully compliant with national safety standards</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <CheckIcon size={14} />
                    </div>
                    <div className="feature-content">
                      <h4>Nationwide Network</h4>
                      <p>Multiple operational plants serving millions</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <CheckIcon size={14} />
                    </div>
                    <div className="feature-content">
                      <h4>Eco-Responsible</h4>
                      <p>Committed to environmental sustainability</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Glassmorphic Stats Grid */}
          <div className="about-visual">
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-card-icon">
                  <PlantIcon size={36} />
                </div>
                <div className="stat-card-number">Multiple</div>
                <div className="stat-card-label">Operational Plants</div>
              </div>
              <div className="stat-card">
                <div className="stat-card-icon">
                  <FamilyIcon size={36} />
                </div>
                <div className="stat-card-number">Millions</div>
                <div className="stat-card-label">Families Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-card-icon">
                  <GlobeIcon size={36} />
                </div>
                <div className="stat-card-number">Pan-India</div>
                <div className="stat-card-label">Distribution</div>
              </div>
              <div className="stat-card">
                <div className="stat-card-icon">
                  <WaterDropIcon size={36} />
                </div>
                <div className="stat-card-number">100%</div>
                <div className="stat-card-label">Pure Water</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
