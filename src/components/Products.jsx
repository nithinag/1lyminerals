import { useState, useEffect } from 'react';
import './Products.css';
import CustomizedBottlesModal from './CustomizedBottlesModal';
import QuoteRequestModal from './QuoteRequestModal';
import { FlameIcon, GiftIcon, StarIcon, SparklesIcon } from './Icons';

const getOfferIcon = (iconName) => {
  switch (iconName) {
    case 'flame': return <FlameIcon size={14} />;
    case 'gift': return <GiftIcon size={14} />;
    case 'star': return <StarIcon size={14} />;
    case 'sparkles': return <SparklesIcon size={14} />;
    default: return null;
  }
};

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const packagingOptions = [
    {
      id: '200ml',
      name: '200ml Premium Bottle',
      size: '200 ml',
      caseQuantity: '48 Bottles Per Case',
      image: '/single-bottle.png',
      description: 'Perfect for events • Easy to carry',
      rating: 4.9,
      reviewsCount: 124,
      offer: { icon: 'flame', text: 'Special Offer' },
      btnText: 'Request Quote',
      type: 'standard',
      sizeClass: 'size-200ml'
    },
    {
      id: '500ml',
      name: '500ml Premium Bottle',
      size: '500 ml',
      caseQuantity: '24 Bottles Per Case',
      image: '/single-bottle.png',
      description: 'Everyday hydration • Convenient size',
      rating: 4.8,
      reviewsCount: 186,
      offer: { icon: 'gift', text: 'Best Seller' },
      btnText: 'Request Quote',
      type: 'standard',
      sizeClass: 'size-500ml'
    },
    {
      id: '1 Litre',
      name: '1 Litre Premium Bottle',
      size: '1000 ml',
      caseQuantity: '15 Bottles Per Case',
      image: '/single-bottle.png',
      description: 'Optimal hydration • Family size',
      rating: 4.9,
      reviewsCount: 95,
      offer: { icon: 'star', text: 'Popular' },
      btnText: 'Request Quote',
      type: 'standard',
      sizeClass: 'size-1l'
    },
    {
      id: 'customized',
      name: 'Customized Bottles',
      size: 'Custom',
      caseQuantity: 'Events & Corporate Needs',
      image: '/custom-bottle.png',
      description: 'Your Brand • Custom labels',
      rating: 5.0,
      reviewsCount: 42,
      offer: { icon: 'sparkles', text: 'Custom Branding' },
      btnText: 'Design Now',
      type: 'custom',
      sizeClass: 'size-custom'
    }
  ];

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">OUR PRODUCTS</span>
          <p className="section-subtitle">Premium packaged drinking water, delivered fresh and pure</p>
        </div>

        <div className="products-content">
          {/* Products Grid */}
          <div className="products-grid">
            {packagingOptions.map((option) => (
              <div className="product-card" key={option.id}>
                <div className="product-image-container">
                  {option.offer && (
                    <div className="product-card-offer">
                      {getOfferIcon(option.offer.icon)}
                      <span>{option.offer.text}</span>
                    </div>
                  )}
                  <div className="product-card-badge">{option.size}</div>
                  {option.type === 'standard' ? (
                    <>
                      <img
                        src={`/bottle-${option.id === '1 Litre' ? '1l' : option.id.toLowerCase()}-green.png`}
                        alt={`${option.name} Green`}
                        className={`product-card-image ${option.sizeClass} swap-image ${activeImageIndex === 0 ? 'visible' : 'hidden'}`}
                      />
                      <img
                        src={`/bottle-${option.id === '1 Litre' ? '1l' : option.id.toLowerCase()}-red.png`}
                        alt={`${option.name} Red`}
                        className={`product-card-image ${option.sizeClass} swap-image ${activeImageIndex === 1 ? 'visible' : 'hidden'}`}
                      />
                    </>
                  ) : (
                    <img
                      src={option.image}
                      alt={option.name}
                      className={`product-card-image ${option.sizeClass}`}
                    />
                  )}
                </div>

                <div className="product-card-info">
                  <h3 className="product-card-title">{option.name}</h3>
                  <p className="product-card-description">{option.description}</p>

                  <div className="product-case-quantity">
                    {option.caseQuantity}
                  </div>

                  <button
                    className="product-card-btn"
                    onClick={() => {
                      if (option.type === 'custom') {
                        setIsModalOpen(true);
                      } else {
                        setSelectedProduct(option.id);
                        setIsQuoteModalOpen(true);
                      }
                    }}
                  >
                    {option.btnText}
                  </button>
                </div>
              </div>
            ))}
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








