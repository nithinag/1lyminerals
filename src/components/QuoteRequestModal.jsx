import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './QuoteRequestModal.css';

const QuoteRequestModal = ({ isOpen, onClose, productSize }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Sending...');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    
    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setFormStatus('Email service not configured. Please set up EmailJS.');
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(''), 8000);
      return;
    }

    const templateParams = {
      to_email: 'mavuri9848@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      product_size: productSize,
      quantity: formData.quantity,
      email_body: `
Quote Request for ${productSize}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Product Size: ${productSize}
Quantity: ${formData.quantity}
      `.trim()
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setFormStatus('Thank you! Your quote request has been sent successfully. We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        quantity: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('Sorry, there was an error sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(''), 8000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={onClose}>
      <div className="quote-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="quote-modal-header">
          <div className="quote-modal-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2h8l-1 2H9L8 2z"></path>
              <path d="M7 4h10v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4z"></path>
              <path d="M9 8h6"></path>
              <path d="M9 12h4"></path>
              <circle cx="12" cy="16" r="1"></circle>
            </svg>
          </div>
          <h2>Request Quote</h2>
          <p className="quote-modal-subtitle">
            Get a quote for <strong>{productSize}</strong> bottles
          </p>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form-row">
            <div className="quote-form-group">
              <label htmlFor="quote-name">Full Name *</label>
              <input
                type="text"
                id="quote-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="quote-form-group">
              <label htmlFor="quote-email">Email Address *</label>
              <input
                type="email"
                id="quote-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="quote-form-group">
            <label htmlFor="quote-phone">Phone Number *</label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 XXXXXXXXXX"
            />
          </div>

          <div className="quote-form-group">
            <label htmlFor="quote-quantity">Estimated Quantity *</label>
            <input
              type="text"
              id="quote-quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              placeholder="e.g., 100 bottles, 50 cases"
            />
          </div>

          <button 
            type="submit" 
            className="quote-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>

          {formStatus && (
            <div className={`quote-form-status ${formStatus.includes('error') || formStatus.includes('Sorry') ? 'error' : ''}`}>
              {formStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default QuoteRequestModal;
