import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './CustomizedBottlesModal.css';

const CustomizedBottlesModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    quantity: '',
    details: ''
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
      company: formData.company,
      event_type: formData.eventType,
      quantity: formData.quantity,
      details: formData.details,
      email_body: `
Customized Bottles Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company/Organization: ${formData.company}
Event Type: ${formData.eventType}
Estimated Quantity: ${formData.quantity}

Additional Details:
${formData.details}
      `.trim()
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setFormStatus('Thank you! Your request has been sent successfully. We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        eventType: '',
        quantity: '',
        details: ''
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
    <div className="customized-modal-overlay" onClick={onClose}>
      <div className="customized-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="customized-modal-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="customized-modal-header">
          <div className="customized-modal-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
              <circle cx="8.5" cy="7.5" r="1" fill="currentColor"></circle>
              <circle cx="15.5" cy="7.5" r="1" fill="currentColor"></circle>
              <circle cx="13.5" cy="12.5" r="1" fill="currentColor"></circle>
              <circle cx="10.5" cy="16.5" r="1" fill="currentColor"></circle>
              <circle cx="16.5" cy="15.5" r="1" fill="currentColor"></circle>
            </svg>
          </div>
          <h2>Customized Bottles</h2>
          <p className="customized-modal-tagline">
            Make your events and corporate gatherings memorable with custom-branded 1LY MINERALS bottles.
          </p>
        </div>

        <div className="customized-use-cases">
          <div className="use-case-card">
            <div className="use-case-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M8 14h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M16 18h.01"></path>
              </svg>
            </div>
            <h4>Corporate Branding</h4>
            <p>Perfect for corporate events, conferences, and company gatherings.</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3v4"></path>
                <path d="M3 5h4"></path>
                <path d="M11 3v4"></path>
                <path d="M9 5h4"></path>
                <path d="M19 3v4"></path>
                <path d="M17 5h4"></path>
                <path d="M5 11v4"></path>
                <path d="M3 13h4"></path>
                <path d="M11 11v4"></path>
                <path d="M9 13h4"></path>
                <path d="M19 11v4"></path>
                <path d="M17 13h4"></path>
                <path d="M5 19v4"></path>
                <path d="M3 21h4"></path>
                <path d="M11 19v4"></path>
                <path d="M9 21h4"></path>
                <path d="M19 19v4"></path>
                <path d="M17 21h4"></path>
                <circle cx="12" cy="12" r="1" fill="currentColor"></circle>
                <circle cx="6" cy="6" r="0.5" fill="currentColor"></circle>
                <circle cx="18" cy="6" r="0.5" fill="currentColor"></circle>
                <circle cx="6" cy="18" r="0.5" fill="currentColor"></circle>
                <circle cx="18" cy="18" r="0.5" fill="currentColor"></circle>
              </svg>
            </div>
            <h4>Special Events</h4>
            <p>Weddings, parties, and celebrations with personalized labels.</p>
          </div>

          <div className="use-case-card">
            <div className="use-case-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <line x1="6.5" y1="6.5" x2="17.5" y2="17.5"></line>
                <line x1="17.5" y1="6.5" x2="6.5" y2="17.5"></line>
              </svg>
            </div>
            <h4>Bulk Orders</h4>
            <p>Custom branding available for large quantity orders.</p>
          </div>
        </div>

        <form className="customized-form" onSubmit={handleSubmit}>
          <div className="customized-form-row">
            <div className="customized-form-group">
              <label htmlFor="custom-name">Full Name *</label>
              <input
                type="text"
                id="custom-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="customized-form-group">
              <label htmlFor="custom-email">Email Address *</label>
              <input
                type="email"
                id="custom-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="customized-form-row">
            <div className="customized-form-group">
              <label htmlFor="custom-phone">Phone Number *</label>
              <input
                type="tel"
                id="custom-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 XXXXXXXXXX"
              />
            </div>

            <div className="customized-form-group">
              <label htmlFor="custom-company">Company/Organization</label>
              <input
                type="text"
                id="custom-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="customized-form-row">
            <div className="customized-form-group event-type-group">
              <label htmlFor="custom-event">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="label-icon">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Event Type *
              </label>
              <div className={`custom-select-wrapper ${formData.eventType ? 'has-selection' : ''}`}>
                <select
                  id="custom-event"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="custom-select"
                >
                  <option value="">Select event type</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Conference">Conference</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Party">Party</option>
                  <option value="Celebration">Celebration</option>
                  <option value="Other">Other</option>
                </select>
                <div className="select-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                {formData.eventType && (
                  <div className="selected-event-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {formData.eventType}
                  </div>
                )}
              </div>
            </div>

            <div className="customized-form-group">
              <label htmlFor="custom-quantity">Estimated Quantity *</label>
              <input
                type="text"
                id="custom-quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                placeholder="e.g., 100 bottles, 50 cases"
              />
            </div>
          </div>

          <div className="customized-form-group">
            <label htmlFor="custom-details">Additional Details</label>
            <textarea
              id="custom-details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your customization requirements..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="customized-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>

          {formStatus && (
            <div className={`customized-form-status ${formStatus.includes('error') || formStatus.includes('Sorry') ? 'error' : ''}`}>
              {formStatus}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CustomizedBottlesModal;
