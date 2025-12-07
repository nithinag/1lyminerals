import './Products.css';

const Products = () => {
  const minerals = [
    {
      name: 'Calcium',
      amount: '2.0mg',
      icon: '🦴',
      benefit: 'Strengthens bones and teeth',
      color: '#0066CC'
    },
    {
      name: 'Magnesium',
      amount: '0.2mg',
      icon: '⚡',
      benefit: 'Supports muscle function',
      color: '#00B4D8'
    },
    {
      name: 'Potassium',
      amount: '0.1mg',
      icon: '❤️',
      benefit: 'Maintains heart health',
      color: '#90E0EF'
    }
  ];

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Our Products</span>
          <h2>Premium Packaged Drinking Water</h2>
          <p className="section-subtitle">
            Mineral-enriched water fortified with essential electrolytes for optimal hydration and health
          </p>
        </div>

        <div className="products-content">
          {/* Main Product Showcase */}
          <div className="product-showcase">
            <div className="product-image-wrapper">
              <div className="product-bottle">
                <div className="bottle-large">
                  <div className="bottle-cap-large"></div>
                  <div className="bottle-body-large">
                    <div className="bottle-label-large">
                      <div className="label-logo-large">1LY</div>
                      <div className="label-text-large">MINERALS</div>
                      <div className="label-subtitle">Premium Water</div>
                    </div>
                    <div className="water-level-large"></div>
                  </div>
                </div>
                <div className="product-glow"></div>
              </div>
            </div>

            <div className="product-details">
              <h3>Mineral Enriched Water</h3>
              <p className="product-description">
                Unlike standard water, <strong>1LY MINERALS</strong> is fortified with essential 
                electrolytes that support hydration and overall health. Each bottle is carefully 
                crafted to deliver the perfect balance of minerals your body needs.
              </p>

              <div className="minerals-list">
                {minerals.map((mineral, index) => (
                  <div key={index} className="mineral-card" style={{'--mineral-color': mineral.color}}>
                    <div className="mineral-icon">{mineral.icon}</div>
                    <div className="mineral-info">
                      <div className="mineral-header">
                        <span className="mineral-name">{mineral.name}</span>
                        <span className="mineral-amount">{mineral.amount}</span>
                      </div>
                      <p className="mineral-benefit">{mineral.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="product-features">
                <div className="feature-badge">
                  <span className="badge-icon">✓</span>
                  <span>BIS Certified</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">✓</span>
                  <span>FSSAI Approved</span>
                </div>
                <div className="feature-badge">
                  <span className="badge-icon">✓</span>
                  <span>100% Pure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information Cards */}
          <div className="product-info-grid">
            <div className="info-card">
              <div className="info-icon">💧</div>
              <h4>Pure & Safe</h4>
              <p>Multi-stage purification ensures every drop is safe and clean</p>
            </div>
            <div className="info-card">
              <div className="info-icon">⚡</div>
              <h4>Electrolyte Rich</h4>
              <p>Essential minerals for optimal hydration and energy</p>
            </div>
            <div className="info-card">
              <div className="info-icon">♻️</div>
              <h4>Eco-Friendly</h4>
              <p>Recyclable packaging - crush bottle after use</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🏆</div>
              <h4>Premium Quality</h4>
              <p>Industry-leading standards for reliability and trust</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="product-cta">
            <h3>Experience the Difference</h3>
            <p>Choose 1LY MINERALS for your family's health and wellness</p>
            <a href="#contact" className="btn btn-primary">Contact Us Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;







