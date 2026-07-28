import { useState, useEffect, useRef, useCallback } from 'react';
import './OrderBot.css';
import { TrophyIcon, CheckIcon, WaterDropIcon } from './Icons';

const OrderBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Dialog flow steps: 'service', 'lead-name', 'lead-phone', 'location', 'pincode-manual', 'city-manual', 'product', 'quantity', 'purpose', 'inquiry-type', 'inquiry-details', 'summary'
  const [flowStep, setFlowStep] = useState('service');
  
  const [leadData, setLeadData] = useState({
    service: '',      // 'order' or 'inquiry'
    name: '',
    phone: '',
    pincode: '',
    city: '',
    productSize: '',
    quantity: 1,      // numeric counter
    purpose: '',
    inquiryType: '',
    inquiryDetails: ''
  });

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Helper to add bot messages with a simulated typing delay
  const triggerBotResponse = useCallback((text, buttons = null, customContent = null) => {
    setIsTyping(true);
    const delay = Math.min(1000, Math.max(500, text.length * 10)); // realistic typing duration
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: 'bot',
        text,
        timestamp: new Date(),
        buttons,
        customContent
      }]);
    }, delay);
  }, []);

  // Auto-scroll to bottom of chat window
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus text input when chat window opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Initialize chatbot conversation
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      triggerBotResponse(
        "Hello! I'm Sam from 1ly Minerals. 💧 How can I help you today?",
        [
          { label: '📦 Place an Order', value: 'order' },
          { label: '💬 Product Inquiry / Contact', value: 'inquiry' }
        ]
      );
    }
  }, [isOpen, messages.length, triggerBotResponse]);

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      type: 'user',
      text,
      timestamp: new Date()
    }]);
  };

  const handleSend = () => {
    const input = currentInput.trim();
    if (!input) return;

    addUserMessage(input);
    setCurrentInput('');
    processInput(input);
  };

  const handleInputChange = (e) => {
    let val = e.target.value;
    if (flowStep === 'lead-phone') {
      val = val.replace(/\D/g, '').slice(0, 10);
    } else if (flowStep === 'pincode-manual') {
      val = val.replace(/\D/g, '').slice(0, 6);
    }
    setCurrentInput(val);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Check if lead data exists in localStorage for autofill
  const checkLeadAutofill = (selectedService) => {
    const savedName = localStorage.getItem('1ly_lead_name');
    const savedPhone = localStorage.getItem('1ly_lead_phone');

    if (savedName && savedPhone) {
      setLeadData(prev => ({
        ...prev,
        service: selectedService,
        name: savedName,
        phone: savedPhone
      }));
      
      triggerBotResponse(
        `Welcome back, **${savedName}**. Initializing your client profile. We will verify your dispatch details using saved mobile number **${savedPhone}**.`
      );
      
      setTimeout(() => {
        askForLocation();
      }, 1200);
    } else {
      setLeadData(prev => ({ ...prev, service: selectedService }));
      setFlowStep('lead-name');
      triggerBotResponse("Welcome to 1ly Minerals. To process your request, we first need to establish your corporate lead details. Please specify your full name:");
    }
  };

  // Trigger location check step
  const askForLocation = () => {
    setFlowStep('location');
    triggerBotResponse(
      "To confirm delivery feasibility and plan dispatch routing, we require your shipping address. Please authorize device GPS coordinates lookup or choose manual entry:",
      [
        { label: '📍 GPS Coordinates Lookup', value: 'gps' },
        { label: '✍️ Manual Address Entry', value: 'manual' }
      ]
    );
  };

  // Reverse Geocoding API handler (High Accuracy & Detailed Address)
  const handleGPSLocation = () => {
    if (!navigator.geolocation) {
      triggerBotResponse("Geolocation is not supported by this browser. Please type your 6-digit postal ZIP code manually:");
      setFlowStep('pincode-manual');
      return;
    }

    triggerBotResponse("Requesting precise location coordinates...");

    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
          const data = await res.json();
          
          const pincode = data.postcode || '';
          
          // Reconstruct detailed subdivision address (neighborhood, locality, city, district, state)
          const addressParts = [];
          if (data.localityInfo && data.localityInfo.administrative) {
            data.localityInfo.administrative.forEach(item => {
              if (item.name && item.order > 2 && !addressParts.includes(item.name)) {
                addressParts.push(item.name);
              }
            });
          }
          if (addressParts.length === 0) {
            if (data.locality) addressParts.push(data.locality);
            if (data.city) addressParts.push(data.city);
            if (data.principalSubdivision) addressParts.push(data.principalSubdivision);
          }

          const detailedAddress = addressParts.reverse().join(', ');

          if (pincode && detailedAddress) {
            setLeadData(prev => ({ ...prev, pincode, city: detailedAddress }));
            triggerBotResponse(`📍 Location confirmed: **${detailedAddress} (PIN: ${pincode})**.`);
            
            setTimeout(() => {
              proceedAfterLocation(selectedServiceType());
            }, 1200);
          } else if (detailedAddress) {
            setLeadData(prev => ({ ...prev, city: detailedAddress }));
            triggerBotResponse(`📍 Location resolved: **${detailedAddress}**. Please type your 6-digit postal ZIP code manually:`);
            setFlowStep('pincode-manual');
          } else {
            triggerBotResponse("Coordinate resolution failed. Please enter your 6-digit postal ZIP code manually:");
            setFlowStep('pincode-manual');
          }
        } catch {
          triggerBotResponse("Failed to fetch location data from satellite lookup. Please enter your 6-digit PIN code manually:");
          setFlowStep('pincode-manual');
        }
      },
      () => {
        triggerBotResponse("Location access denied or timed out. No problem! Please enter your 6-digit PIN code manually:");
        setFlowStep('pincode-manual');
      },
      geoOptions
    );
  };

  const selectedServiceType = () => {
    return leadData.service;
  };

  const proceedAfterLocation = (service) => {
    if (service === 'order') {
      setFlowStep('product');
      triggerBotResponse("Please select your required packaging specification from our catalogue:", null, 'product-grid');
    } else {
      setFlowStep('inquiry-type');
      triggerBotResponse("Please specify the subject of your inquiry:", [
        { label: '💧 Water Purity & Quality', value: 'Water Purity' },
        { label: '🎨 Custom Label Design', value: 'Custom Label' },
        { label: '🤝 Distributorship', value: 'Distributorship' },
        { label: '❓ Other Questions', value: 'Other' }
      ]);
    }
  };

  // Core dialog flow controller
  const processInput = (val) => {
    const cleanVal = val.trim();
    
    switch (flowStep) {
      case 'service':
        if (cleanVal === 'order' || cleanVal.toLowerCase().includes('order')) {
          checkLeadAutofill('order');
        } else if (cleanVal === 'inquiry' || cleanVal.toLowerCase().includes('inquiry')) {
          checkLeadAutofill('inquiry');
        } else {
          triggerBotResponse("Please select one of the options below to proceed:", [
            { label: '📦 Place an Order', value: 'order' },
            { label: '💬 Product Inquiry / Contact', value: 'inquiry' }
          ]);
        }
        break;

      case 'lead-name':
        setLeadData(prev => ({ ...prev, name: cleanVal }));
        localStorage.setItem('1ly_lead_name', cleanVal);
        setFlowStep('lead-phone');
        triggerBotResponse(`Thank you, ${cleanVal}. Please specify your primary 10-digit mobile number for order verification and real-time updates:`);
        break;

      case 'lead-phone': {
        const phoneDigits = cleanVal.replace(/\D/g, '');
        if (/^[6-9]\d{9}$/.test(phoneDigits)) {
          setLeadData(prev => ({ ...prev, phone: phoneDigits }));
          localStorage.setItem('1ly_lead_phone', phoneDigits);
          askForLocation();
        } else {
          triggerBotResponse("❌ Invalid number. Please specify a valid 10-digit Indian mobile number:");
        }
        break;
      }

      case 'location':
        if (cleanVal === 'gps') {
          handleGPSLocation();
        } else {
          setFlowStep('pincode-manual');
          triggerBotResponse("Please specify your 6-digit postal ZIP code:");
        }
        break;

      case 'pincode-manual': {
        const pinDigits = cleanVal.replace(/\D/g, '');
        if (/^\d{6}$/.test(pinDigits)) {
          setLeadData(prev => ({ ...prev, pincode: pinDigits }));
          setFlowStep('city-manual');
          triggerBotResponse("Confirmed. Please specify your delivery city or town:");
        } else {
          triggerBotResponse("❌ Invalid PIN. Please specify a valid 6-digit PIN code:");
        }
        break;
      }

      case 'city-manual':
        setLeadData(prev => {
          const updated = { ...prev, city: cleanVal };
          setTimeout(() => {
            proceedAfterLocation(updated.service);
          }, 600);
          return updated;
        });
        break;

      case 'product': {
        const sizeLower = cleanVal.toLowerCase();
        let size = '';
        if (sizeLower.includes('200')) size = '200ml';
        else if (sizeLower.includes('500')) size = '500ml';
        else if (sizeLower.includes('1') || sizeLower.includes('litre')) size = '1 Litre';
        else if (sizeLower.includes('custom')) size = 'Customized';

        if (size) {
          setLeadData(prev => ({ ...prev, productSize: size }));
          setFlowStep('quantity');
          triggerBotResponse(`Confirmed: **${size}**. Please specify the number of cases required for this consignment:`, null, 'quantity-counter');
        } else {
          triggerBotResponse("Please select your required packaging specification from our catalogue:");
        }
        break;
      }

      case 'quantity': {
        const cases = parseInt(cleanVal, 10);
        if (!isNaN(cases) && cases > 0) {
          setLeadData(prev => ({ ...prev, quantity: cases }));
          setFlowStep('purpose');
          triggerBotResponse("Please specify the primary commercial or consumption purpose for this consignment:", [
            { label: '🏢 Retail Sale', value: 'Retail' },
            { label: '🤝 Distribution', value: 'Distribution' },
            { label: '🏠 Personal Use', value: 'Personal' },
            { label: '🎉 Corporate/Family Event', value: 'Event' }
          ]);
        } else {
          triggerBotResponse("Please specify a valid quantity of cases.");
        }
        break;
      }

      case 'purpose':
        setLeadData(prev => {
          const updated = { ...prev, purpose: cleanVal };
          setFlowStep('summary');
          triggerBotResponse("All set. Your dispatch summary has been compiled successfully. Please review the receipt below:", null, 'receipt');
          return updated;
        });
        break;

      case 'inquiry-type':
        setLeadData(prev => ({ ...prev, inquiryType: cleanVal }));
        setFlowStep('inquiry-details');
        triggerBotResponse(`Please describe your inquiry details regarding **${cleanVal}** below:`);
        break;

      case 'inquiry-details':
        setLeadData(prev => {
          const updated = { ...prev, inquiryDetails: cleanVal };
          setFlowStep('summary');
          triggerBotResponse("Thank you. Your inquiry details have been collected successfully:", null, 'receipt');
          return updated;
        });
        break;

      default:
        break;
    }
  };

  const handleSelectProduct = (sizeName) => {
    addUserMessage(sizeName);
    processInput(sizeName);
  };

  const handleConfirmQuantity = (qty) => {
    addUserMessage(`${qty} Case${qty > 1 ? 's' : ''}`);
    processInput(qty.toString());
  };



  // Increment/Decrement counter component
  const QuantityCounter = () => {
    const [val, setVal] = useState(5);
    return (
      <div className="bot-interactive-counter">
        <button className="counter-btn" onClick={() => setVal(prev => Math.max(1, prev - 1))}>-</button>
        <span className="counter-val">{val} Case{val > 1 ? 's' : ''}</span>
        <button className="counter-btn" onClick={() => setVal(prev => prev + 1)}>+</button>
        <button className="counter-confirm-btn" onClick={() => handleConfirmQuantity(val)}>
          Confirm Quantity
        </button>
      </div>
    );
  };

  // Final Order / Inquiry Invoice Summary Card
  const ReceiptInvoice = () => {
    const { service, name, phone, pincode, city, productSize, quantity, purpose, inquiryType, inquiryDetails } = leadData;
    const isOrder = service === 'order';
    
    // Auto calculate bottle totals based on standard packaging rules
    let bottlesPerCase = 15;
    if (productSize === '200ml') bottlesPerCase = 48;
    else if (productSize === '500ml') bottlesPerCase = 24;

    const totalBottles = quantity * bottlesPerCase;

    const formattedWhatsAppMsg = () => {
      if (isOrder) {
        return `Hello 1LY Minerals! I would like to place an order.%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A📍 Location: ${city} (PIN: ${pincode})%0A📦 Product: ${productSize} (${quantity} Cases)%0A💧 Total Bottles: ${totalBottles} bottles%0A🎯 Purpose: ${purpose}`;
      } else {
        return `Hello 1LY Minerals! I have an inquiry.%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A📍 Location: ${city}%0A❓ Topic: ${inquiryType}%0A📝 Details: ${inquiryDetails}`;
      }
    };

    const handleConfirmWhatsApp = () => {
      const waUrl = `https://wa.me/917090009669?text=${formattedWhatsAppMsg()}`;
      window.open(waUrl, '_blank');
    };

    return (
      <div className="receipt-invoice-card">
        <div className="receipt-header">
          <WaterDropIcon size={24} className="receipt-logo" />
          <div className="receipt-brand">1LY MINERALS</div>
          <div className="receipt-type">{isOrder ? 'ORDER RECEIPT' : 'INQUIRY SLIP'}</div>
        </div>
        
        <div className="receipt-divider"></div>

        <div className="receipt-body">
          <div className="receipt-row">
            <span className="label">CUSTOMER:</span>
            <span className="val">{name}</span>
          </div>
          <div className="receipt-row">
            <span className="label">CONTACT:</span>
            <span className="val">{phone}</span>
          </div>
          <div className="receipt-row">
            <span className="label">DELIVERY TO:</span>
            <span className="val">{city} - {pincode}</span>
          </div>

          <div className="receipt-divider-dash"></div>

          {isOrder ? (
            <>
              <div className="receipt-row">
                <span className="label">PRODUCT SIZE:</span>
                <span className="val">{productSize}</span>
              </div>
              <div className="receipt-row">
                <span className="label">QUANTITY:</span>
                <span className="val">{quantity} Case{quantity > 1 ? 's' : ''}</span>
              </div>
              <div className="receipt-row">
                <span className="label">TOTAL BOTTLES:</span>
                <span className="val font-bold">{totalBottles} Units</span>
              </div>
              <div className="receipt-row">
                <span className="label">PURPOSE:</span>
                <span className="val">{purpose}</span>
              </div>
            </>
          ) : (
            <>
              <div className="receipt-row">
                <span className="label">INQUIRY ON:</span>
                <span className="val">{inquiryType}</span>
              </div>
              <div className="receipt-details-box">
                {inquiryDetails}
              </div>
            </>
          )}
        </div>

        <div className="receipt-divider-dash"></div>
        
        <div className="receipt-barcode">
          <div className="barcode-lines"></div>
          <span className="barcode-text">1LY-REF-{Math.floor(100000 + Math.random() * 900000)}</span>
        </div>

        <button className="receipt-wa-btn" onClick={handleConfirmWhatsApp}>
          💬 Confirm via WhatsApp
        </button>
      </div>
    );
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917090009669', '_blank');
  };

  const resetConversation = () => {
    setMessages([]);
    setFlowStep('service');
    setLeadData({
      service: '',
      name: '',
      phone: '',
      pincode: '',
      city: '',
      productSize: '',
      quantity: 1,
      purpose: '',
      inquiryType: '',
      inquiryDetails: ''
    });
    triggerBotResponse(
      "Hello! I'm Sam from 1ly Minerals. 💧 How can I help you today?",
      [
        { label: '📦 Place an Order', value: 'order' },
        { label: '💬 Product Inquiry / Contact', value: 'inquiry' }
      ]
    );
  };

  return (
    <>
      {/* Bot Toggle Button */}
      <button 
        className={`order-bot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="HOW CAN I ASSIST YOU?"
        title="HOW CAN I ASSIST YOU?"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" fill="currentColor"/>
          </svg>
        )}
      </button>

      {/* WhatsApp Button */}
      <button 
        className="whatsapp-bot-toggle"
        onClick={handleWhatsAppClick}
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
        </svg>
      </button>

      {/* Chat Window Frame */}
      {isOpen && (
        <div className="order-bot-window glassmorphic">
          {/* Header */}
          <div className="order-bot-header">
            <div className="bot-info">
              <TrophyIcon size={20} className="bot-icon-badge" />
              <h3>Sam @ 1LY Minerals</h3>
            </div>
            <button className="reset-button" onClick={resetConversation} title="Reset Chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Dialog Message Area */}
          <div className="order-bot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <div className="message-bubble">
                  <div className="message-text">{msg.text}</div>
                  
                  {/* Option Buttons */}
                  {msg.buttons && msg.buttons.length > 0 && (
                    <div className="quick-reply-buttons">
                      {msg.buttons.map((btn, btnIdx) => (
                        <button key={btnIdx} className="quick-reply-btn" onClick={() => {
                          addUserMessage(btn.label);
                          processInput(btn.value);
                        }}>
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Dynamic Product Cards */}
                  {msg.customContent === 'product-grid' && (
                    <div className="bot-product-grid">
                      <div className="bot-product-card" onClick={() => handleSelectProduct('200ml')}>
                        <img src="/bottle-200ml-green.png" alt="200ml" />
                        <div className="name">200ml Size</div>
                        <div className="cases">48 Bottles/Case</div>
                      </div>
                      <div className="bot-product-card" onClick={() => handleSelectProduct('500ml')}>
                        <img src="/bottle-500ml-green.png" alt="500ml" />
                        <div className="name">500ml Size</div>
                        <div className="cases">24 Bottles/Case</div>
                      </div>
                      <div className="bot-product-card" onClick={() => handleSelectProduct('1 Litre')}>
                        <img src="/bottle-1l-green.png" alt="1l" />
                        <div className="name">1L Size</div>
                        <div className="cases">15 Bottles/Case</div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Increment/Decrement Counter */}
                  {msg.customContent === 'quantity-counter' && <QuantityCounter />}

                  {/* Invoice Summary Slip */}
                  {msg.customContent === 'receipt' && <ReceiptInvoice />}
                  
                  <div className="message-time">
                    {msg.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {/* Bouncing Typing Bubble */}
            {isTyping && (
              <div className="message bot">
                <div className="message-bubble typing-bubble">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Plain Text Input Field */}
          {flowStep !== 'summary' && (
            <div className="order-bot-input">
              <input
                ref={inputRef}
                type={flowStep === 'lead-phone' ? 'tel' : 'text'}
                name={flowStep === 'lead-name' ? 'name' : flowStep === 'lead-phone' ? 'tel' : flowStep === 'pincode-manual' ? 'postal-code' : 'message'}
                autoComplete={flowStep === 'lead-name' ? 'name' : flowStep === 'lead-phone' ? 'tel' : flowStep === 'pincode-manual' ? 'postal-code' : 'off'}
                maxLength={flowStep === 'lead-phone' ? 10 : flowStep === 'pincode-manual' ? 6 : undefined}
                value={currentInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={
                  flowStep === 'lead-name' ? "Enter full name..." :
                  flowStep === 'lead-phone' ? "Enter 10-digit number..." :
                  flowStep === 'pincode-manual' ? "Enter 6-digit PIN..." :
                  flowStep === 'city-manual' ? "Enter city..." :
                  flowStep === 'inquiry-details' ? "Describe inquiry..." :
                  "Type text here..."
                }
              />
              <button 
                onClick={handleSend}
                disabled={!currentInput.trim()}
                className="send-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default OrderBot;
