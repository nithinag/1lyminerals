import { useState } from 'react';
import './Products.css';
import CustomizedBottlesModal from './CustomizedBottlesModal';
import QuoteRequestModal from './QuoteRequestModal';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
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
                        <button 
                          className="card-request-btn" 
                          onClick={() => {
                            setSelectedProduct(option.size);
                            setIsQuoteModalOpen(true);
                          }}
                        >
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Customized Card */}
                <div className="mineral-card customized-card" style={{'--mineral-color': '#FF69B4'}}>
                  <div className="mineral-icon customized-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2h8l-1 2H9L8 2z"></path>
                      <path d="M7 4h10v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4z"></path>
                      <path d="M9 8h6"></path>
                      <path d="M9 12h4"></path>
                      <circle cx="12" cy="16" r="1"></circle>
                      <path d="M16.5 5.5l1.5-1.5 1.5 1.5"></path>
                      <path d="M18 4v3"></path>
                      <path d="M19.5 5.5l-1.5 1.5"></path>
                      <circle cx="18" cy="5.5" r="0.5" fill="currentColor"></circle>
                      <path d="M16 8l1 1 3-3"></path>
                      <circle cx="17" cy="9" r="0.5" fill="currentColor"></circle>
                    </svg>
                  </div>
                  <div className="mineral-info">
                    <div className="mineral-header">
                      <span className="mineral-name">Customized</span>
                      <span className="custom-branding-tag">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{display: 'inline-block', marginRight: '4px'}}>
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                        </svg>
                        Custom Branding
                      </span>
                    </div>
                    <p className="mineral-benefit">Events & Corporate Needs</p>
                    <div className="card-cta-buttons">
                      <button 
                        className="card-request-btn" 
                        onClick={() => setIsModalOpen(true)}
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
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
      
      <CustomizedBottlesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <QuoteRequestModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => {
          setIsQuoteModalOpen(false);
          setSelectedProduct('');
        }}
        productSize={selectedProduct}
      />
    </section>
  );
};

export default Products;







