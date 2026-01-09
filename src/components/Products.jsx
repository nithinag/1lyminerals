import './Products.css';

const Products = () => {
  const packagingOptions = [
    {
      size: '200ml',
      caseQuantity: '48 Bottles Per Case',
      icon: '💧',
      color: '#0066CC',
      offer: '🔥 Special Offer'
    },
    {
      size: '500ml',
      caseQuantity: '24 Bottles Per Case',
      icon: '💧',
      color: '#00B4D8',
      offer: '🎁 Best Seller'
    },
    {
      size: '1 Litre  ',
      caseQuantity: '15 Bottles Per Case',
      icon: '💧',
      color: '#90E0EF',
      offer: '⭐ Popular'
    }
  ];

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Our Products</span>
          <h2>Premium Packaged Drinking Water</h2>
          <p className="section-subtitle"> Mineral-enriched water fortified with essential electrolytes for optimal hydration and health
          </p>
        </div>

        <div className="products-content">
          {/* Main Product Showcase */}
          <div className="product-showcase">
            <div className="product-image-wrapper">
              <div className="product-bottle">
                <img 
                  src="/group-bottles-1.png" 
                  alt="1LY Minerals Bottles" 
                  className="bottle-image-large"
                />
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
                {packagingOptions.map((option, index) => (
                  <div key={index} className="mineral-card" style={{'--mineral-color': option.color}}>
                    <div className="mineral-icon">{option.icon}</div>
                    <div className="mineral-info">
                      <div className="mineral-header">
                        <span className="mineral-name">{option.size}</span>
                        <span className="card-offer-badge">{option.offer}</span>
                      </div>
                      <p className="mineral-benefit">{option.caseQuantity}</p>
                      <div className="card-cta-buttons">
                        <a href="tel:+917090009669" className="card-call-btn">📞 Call</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="product-features">
                <div className="feature-badge">
                  <span className="badge-icon">✓</span>
                  <span>Trusted by Millions</span>
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







