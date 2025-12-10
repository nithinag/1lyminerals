import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    setFormStatus('Thank you! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Get In Touch</span>
          <h2>Contact Us</h2>
          <p className="section-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon">📍</div>
              <h4>Head Office</h4>
              <p>Avalahall, Bangalore - 560 049</p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">📞</div>
              <h4>Customer Care</h4>
              <p><a href="tel:+917090009669">+91 7090009669</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">✉️</div>
              <h4>Email Us</h4>
              <p><a href="mailto:1lyminerals@gmail.com">1lyminerals@gmail.com</a></p>
            </div>

            <div className="info-box">
              <h4>Why Choose 1LY MINERALS?</h4>
              <ul>
                <li>✓ Premium mineral-enriched water</li>
                <li>✓ FSSAI certified</li>
                <li>✓ Multi-stage purification</li>
                <li>✓ Pan-India distribution</li>
                <li>✓ Trusted by millions</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>

              {formStatus && (
                <div className="form-status">{formStatus}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;







