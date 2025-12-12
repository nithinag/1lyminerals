import { useState, useEffect, useRef } from 'react';
import './OrderBot.css';

const OrderBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [conversationState, setConversationState] = useState('initial');
  const [language, setLanguage] = useState('');
  const [orderData, setOrderData] = useState({
    intent: '', // 'order', 'inquiry', 'delivery'
    name: '',
    mobile: '',
    email: '',
    city: '',
    pincode: '',
    customerType: '',
    productSize: '',
    quantity: '',
    purpose: '',
    requirements: '', // Will be auto-generated from above
    orderNumber: '', // For delivery tracking
    deliveryStatus: '' // For delivery tracking
  });
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Content in three languages
  const content = {
    en: {
      initial: "Hello! I'm Sam from 1ly Minerals. How can I assist you today? Please choose an option:\n\n1. Place a New Order\n2. General Inquiry / Contact\n3. Check Delivery Status",
      languageSelect: "Thank you! Before we proceed, what language would you prefer? Please choose an option:\n\n1. English\n2. Kannada\n3. Hindi",
      mobile: "Great! Please share your mobile number so we can contact you regarding your request.",
      email: "Thank you. May I also have your email address? (You can type 'skip' if you don't have one or prefer not to share)",
      name: "And finally, please share your full name.",
      city: "To check service availability, please share your city/town name.",
      pincode: "And finally, for accurate mapping, please provide your PIN code.",
      customerType: "What type of customer are you? (e.g., Retailer, Distributor, End Customer).",
      productSize: "Please select the product size you need:",
      quantity: "How many cases would you like to order?",
      purpose: "What is the purpose of this order?",
      requirements: "Please share your specific order requirements: product size (e.g., 200ml, 1 litre), quantity (boxes/bottles), and the purpose.",
      orderNumber: "To check your delivery status, please provide your Order Number or Tracking ID.",
      deliveryMobile: "Please share the mobile number associated with your order for verification.",
      deliveryStatus: "Your order status will be checked shortly. Our team will contact you with the details.",
      deliveryCompletion: "Thank you! We have received your delivery status request. Our team will check your order and contact you shortly with the delivery status via phone. Thank you for choosing 1ly Minerals!",
      completion: "Thank you! We have all the details. Our 1ly Minerals team will review your request and contact you shortly via phone or email. Thank you for choosing 1ly Minerals!",
      invalidMobile: "Please enter a valid 10-digit mobile number.",
      invalidOrderNumber: "Please enter a valid Order Number or Tracking ID.",
      invalidEmail: "Please enter a valid email address.",
      invalidPincode: "Please enter a valid 6-digit PIN code.",
      selectOption: "Please select a valid option (1, 2, or 3).",
      placeholder: "Type your message...",
      send: "Send"
    },
    kn: {
      initial: "ನಮಸ್ಕಾರ! ನಾನು 1ly Minerals ನಿಂದ ಸ್ಯಾಮ್. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು? ದಯವಿಟ್ಟು ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ:\n\n1. ಹೊಸ ಆದೇಶ ನೀಡಿ\n2. ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ / ಸಂಪರ್ಕ\n3. ವಿತರಣಾ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ",
      languageSelect: "ಧನ್ಯವಾದಗಳು! ನಾವು ಮುಂದುವರಿಯುವ ಮೊದಲು, ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆ ಯಾವುದು? ದಯವಿಟ್ಟು ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ:\n\n1. English\n2. Kannada\n3. Hindi",
      mobile: "ಉತ್ತಮ! ದಯವಿಟ್ಟು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಇದರಿಂದ ನಾವು ನಿಮ್ಮ ವಿನಂತಿಯ ಬಗ್ಗೆ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.",
      email: "ಧನ್ಯವಾದಗಳು. ನಾನು ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಸಹ ಪಡೆಯಬಹುದೇ? (ನೀವು ಒಂದನ್ನು ಹೊಂದಿಲ್ಲದಿದ್ದರೆ ಅಥವಾ ಹಂಚಿಕೊಳ್ಳಲು ಬಯಸದಿದ್ದರೆ 'skip' ಎಂದು ಟೈಪ್ ಮಾಡಬಹುದು)",
      name: "ಮತ್ತು ಅಂತಿಮವಾಗಿ, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.",
      city: "ಸೇವಾ ಲಭ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಲು, ದಯವಿಟ್ಟು ನಿಮ್ಮ ನಗರ/ಪಟ್ಟಣದ ಹೆಸರನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.",
      pincode: "ಮತ್ತು ಅಂತಿಮವಾಗಿ, ನಿಖರವಾದ ಮ್ಯಾಪಿಂಗ್ಗಾಗಿ, ದಯವಿಟ್ಟು ನಿಮ್ಮ PIN ಕೋಡ್ ನೀಡಿ.",
      customerType: "ನೀವು ಯಾವ ರೀತಿಯ ಗ್ರಾಹಕ? (ಉದಾಹರಣೆಗೆ, ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿ, ವಿತರಕ, ಅಂತಿಮ ಗ್ರಾಹಕ).",
      productSize: "ದಯವಿಟ್ಟು ನಿಮಗೆ ಬೇಕಾದ ಉತ್ಪನ್ನ ಗಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
      quantity: "ನೀವು ಎಷ್ಟು ಪೆಟ್ಟಿಗೆಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?",
      purpose: "ಈ ಆದೇಶದ ಉದ್ದೇಶ ಏನು?",
      requirements: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಆದೇಶದ ಅವಶ್ಯಕತೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ: ಉತ್ಪನ್ನ ಗಾತ್ರ (ಉದಾಹರಣೆಗೆ, 200ml, 1 litre), ಪ್ರಮಾಣ (ಪೆಟ್ಟಿಗೆಗಳು/ಬಾಟಲಿಗಳು), ಮತ್ತು ಉದ್ದೇಶ.",
      orderNumber: "ನಿಮ್ಮ ವಿತರಣಾ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆರ್ಡರ್ ಸಂಖ್ಯೆ ಅಥವಾ ಟ್ರ್ಯಾಕಿಂಗ್ ID ನೀಡಿ.",
      deliveryMobile: "ಪರಿಶೀಲನೆಗಾಗಿ, ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆರ್ಡರ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.",
      deliveryStatus: "ನಿಮ್ಮ ಆರ್ಡರ್ ಸ್ಥಿತಿಯನ್ನು ಶೀಘ್ರದಲ್ಲೇ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ. ನಮ್ಮ ತಂಡವು ವಿವರಗಳೊಂದಿಗೆ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
      deliveryCompletion: "ಧನ್ಯವಾದಗಳು! ನಾವು ನಿಮ್ಮ ವಿತರಣಾ ಸ್ಥಿತಿ ವಿನಂತಿಯನ್ನು ಸ್ವೀಕರಿಸಿದ್ದೇವೆ. ನಮ್ಮ ತಂಡವು ನಿಮ್ಮ ಆರ್ಡರ್ ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ಫೋನ್ ಮೂಲಕ ವಿತರಣಾ ಸ್ಥಿತಿಯೊಂದಿಗೆ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ. 1ly Minerals ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು!",
      completion: "ಧನ್ಯವಾದಗಳು! ನಮಗೆ ಎಲ್ಲಾ ವಿವರಗಳು ಸಿಕ್ಕಿವೆ. ನಮ್ಮ 1ly Minerals ತಂಡವು ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ಫೋನ್ ಅಥವಾ ಇಮೇಲ್ ಮೂಲಕ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ. 1ly Minerals ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು!",
      invalidMobile: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
      invalidOrderNumber: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಆರ್ಡರ್ ಸಂಖ್ಯೆ ಅಥವಾ ಟ್ರ್ಯಾಕಿಂಗ್ ID ನಮೂದಿಸಿ.",
      invalidEmail: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.",
      invalidPincode: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ 6 ಅಂಕಿಯ PIN ಕೋಡ್ ನಮೂದಿಸಿ.",
      selectOption: "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ (1, 2, ಅಥವಾ 3).",
      placeholder: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...",
      send: "ಕಳುಹಿಸಿ"
    },
    hi: {
      initial: "नमस्ते! मैं 1ly Minerals की ओर से सैम हूं। मैं आपकी कैसे मदद कर सकता हूं? कृपया एक विकल्प चुनें:\n\n1. नया ऑर्डर दें\n2. सामान्य पूछताछ / संपर्क\n3. डिलीवरी स्थिति जांचें",
      languageSelect: "धन्यवाद! हम आगे बढ़ने से पहले, आप कौन सी भाषा पसंद करेंगे? कृपया एक विकल्प चुनें:\n\n1. English\n2. Kannada\n3. Hindi",
      mobile: "बढ़िया! कृपया अपना मोबाइल नंबर साझा करें ताकि हम आपके अनुरोध के संबंध में आपसे संपर्क कर सकें।",
      email: "धन्यवाद। क्या मैं आपका ईमेल पता भी ले सकती हूं? (यदि आपके पास नहीं है या साझा नहीं करना चाहते तो 'skip' टाइप करें)",
      name: "और अंत में, कृपया अपना पूरा नाम साझा करें।",
      city: "सेवा उपलब्धता जांचने के लिए, कृपया अपने शहर/कस्बे का नाम साझा करें।",
      pincode: "और अंत में, सटीक मैपिंग के लिए, कृपया अपना PIN कोड प्रदान करें।",
      customerType: "आप किस प्रकार के ग्राहक हैं? (उदाहरण के लिए, खुदरा विक्रेता, वितरक, अंतिम ग्राहक)।",
      productSize: "कृपया उत्पाद का आकार चुनें जिसकी आपको आवश्यकता है:",
      quantity: "आप कितने केस ऑर्डर करना चाहेंगे?",
      purpose: "इस ऑर्डर का उद्देश्य क्या है?",
      requirements: "कृपया अपनी विशिष्ट ऑर्डर आवश्यकताएं साझा करें: उत्पाद का आकार (उदाहरण के लिए, 200ml, 1 litre), मात्रा (बक्से/बोतलें), और उद्देश्य।",
      orderNumber: "अपनी डिलीवरी स्थिति जांचने के लिए, कृपया अपना ऑर्डर नंबर या ट्रैकिंग ID प्रदान करें।",
      deliveryMobile: "सत्यापन के लिए, कृपया अपने ऑर्डर से जुड़ा मोबाइल नंबर साझा करें।",
      deliveryStatus: "आपकी ऑर्डर स्थिति जल्द ही जांची जाएगी। हमारी टीम विवरणों के साथ आपसे संपर्क करेगी।",
      deliveryCompletion: "धन्यवाद! हमने आपका डिलीवरी स्थिति अनुरोध प्राप्त कर लिया है। हमारी टीम आपके ऑर्डर की जांच करेगी और फोन के माध्यम से डिलीवरी स्थिति के साथ जल्द ही आपसे संपर्क करेगी। 1ly Minerals चुनने के लिए धन्यवाद!",
      completion: "धन्यवाद! हमारे पास सभी विवरण हैं। हमारी 1ly Minerals टीम आपके अनुरोध की समीक्षा करेगी और फोन या ईमेल के माध्यम से जल्द ही आपसे संपर्क करेगी। 1ly Minerals चुनने के लिए धन्यवाद!",
      invalidMobile: "कृपया एक मान्य 10 अंकों का मोबाइल नंबर दर्ज करें।",
      invalidOrderNumber: "कृपया एक मान्य ऑर्डर नंबर या ट्रैकिंग ID दर्ज करें।",
      invalidEmail: "कृपया एक मान्य ईमेल पता दर्ज करें।",
      invalidPincode: "कृपया एक मान्य 6 अंकों का PIN कोड दर्ज करें।",
      selectOption: "कृपया एक मान्य विकल्प चुनें (1, 2, या 3)।",
      placeholder: "अपना संदेश लिखें...",
      send: "भेजें"
    }
  };

  const intents = {
    '1': 'order',
    '2': 'inquiry',
    '3': 'delivery',
    'place': 'order',
    'order': 'order',
    'new order': 'order',
    'inquiry': 'inquiry',
    'contact': 'inquiry',
    'general': 'inquiry',
    'delivery': 'delivery',
    'status': 'delivery',
    'check': 'delivery'
  };

  const languages = {
    '1': 'en',
    '2': 'kn',
    '3': 'hi',
    'english': 'en',
    'kannada': 'kn',
    'hindi': 'hi',
    'en': 'en',
    'kn': 'kn',
    'hi': 'hi'
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Initialize conversation
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialButtons = [
        { label: '1. Place a New Order', value: '1' },
        { label: '2. General Inquiry / Contact', value: '2' },
        { label: '3. Check Delivery Status', value: '3' }
      ];
      addBotMessage(content.en.initial, 100, initialButtons);
    }
  }, [isOpen]);

  const addBotMessage = (text, delay = 500, buttons = null) => {
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text, timestamp: new Date(), buttons }]);
    }, delay);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, { type: 'user', text, timestamp: new Date() }]);
  };

  const validateMobile = (mobile) => {
    return /^[6-9]\d{9}$/.test(mobile);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePincode = (pincode) => {
    return /^\d{6}$/.test(pincode);
  };

  const getText = (key, replacements = {}) => {
    const lang = language || 'en';
    let text = content[lang][key];
    Object.keys(replacements).forEach(key => {
      text = text.replace(`{${key}}`, replacements[key]);
    });
    return text;
  };

  const handleSend = () => {
    const input = currentInput.trim();
    if (!input) return;

    addUserMessage(input);
    setCurrentInput('');
    processUserInput(input);
  };

  const handleButtonClick = (value) => {
    addUserMessage(value);
    processUserInput(value);
  };

  const processUserInput = (input) => {
    const lowerInput = input.toLowerCase().trim();

    switch (conversationState) {
      case 'initial':
        // Step 1: User selects intent (1, 2, or 3)
        const selectedIntent = intents[lowerInput] || intents[input];
        if (selectedIntent) {
          setOrderData(prev => ({ ...prev, intent: selectedIntent }));
          setConversationState('languageSelect');
          const langButtons = [
            { label: '1. English', value: '1' },
            { label: '2. Kannada', value: '2' },
            { label: '3. Hindi', value: '3' }
          ];
          addBotMessage(content.en.languageSelect, 100, langButtons);
        } else {
          const initialButtons = [
            { label: '1. Place a New Order', value: '1' },
            { label: '2. General Inquiry / Contact', value: '2' },
            { label: '3. Check Delivery Status', value: '3' }
          ];
          addBotMessage("Please select a valid option (1, 2, or 3).", 100, initialButtons);
        }
        break;

      case 'languageSelect':
        // Step 2: Language preference
        const selectedLang = languages[lowerInput] || languages[input];
        if (selectedLang) {
          setLanguage(selectedLang);
          // For delivery status, skip to order number directly
          if (orderData.intent === 'delivery') {
            setConversationState('orderNumber');
            addBotMessage(content[selectedLang].orderNumber);
          } else {
            setConversationState('mobile');
            addBotMessage(content[selectedLang].mobile);
          }
        } else {
          const langButtons = [
            { label: '1. English', value: '1' },
            { label: '2. Kannada', value: '2' },
            { label: '3. Hindi', value: '3' }
          ];
          addBotMessage("Please select a valid option (1 for English, 2 for Kannada, 3 for Hindi).", 100, langButtons);
        }
        break;

      case 'mobile':
        // Step 3: Mobile number (not needed for delivery status)
        const cleanMobile = input.replace(/\D/g, '');
        if (validateMobile(cleanMobile)) {
          setOrderData(prev => ({ ...prev, mobile: cleanMobile }));
          setConversationState('email');
          const skipButton = [{ label: 'Skip', value: 'skip' }];
          addBotMessage(getText('email'), 100, skipButton);
        } else {
          addBotMessage(getText('invalidMobile'));
        }
        break;

      case 'email':
        // Step 4: Email address (optional)
        if (lowerInput === 'skip' || lowerInput === 'no' || lowerInput === 'na' || lowerInput === '' || lowerInput === 'skip email') {
          setOrderData(prev => ({ ...prev, email: '' }));
          setConversationState('name');
          addBotMessage(getText('name'));
        } else if (validateEmail(input)) {
          setOrderData(prev => ({ ...prev, email: input }));
          setConversationState('name');
          addBotMessage(getText('name'));
        } else {
          const skipButton = [{ label: 'Skip', value: 'skip' }];
          addBotMessage(getText('invalidEmail'), 100, skipButton);
        }
        break;

      case 'name':
        // Step 5: Full name
        setOrderData(prev => ({ ...prev, name: input }));
        setConversationState('city');
        addBotMessage(getText('city'));
        break;

      case 'city':
        // Step 6: City/Town
        setOrderData(prev => ({ ...prev, city: input }));
        setConversationState('pincode');
        addBotMessage(getText('pincode'));
        break;

      case 'pincode':
        // Step 7: PIN code
        const cleanPincode = input.replace(/\D/g, '');
        if (validatePincode(cleanPincode)) {
          const currentIntent = orderData.intent;
          setOrderData(prev => ({ ...prev, pincode: cleanPincode }));
          
          // Step 8: Intent-specific questions (only for orders)
          if (currentIntent === 'order') {
            setConversationState('customerType');
            const customerTypeButtons = [
              { label: '1. Retailer', value: 'Retailer' },
              { label: '2. Distributor', value: 'Distributor' },
              { label: '3. End Customer', value: 'End Customer' }
            ];
            addBotMessage(getText('customerType'), 100, customerTypeButtons);
          } else {
            // For inquiry, skip to completion
            setConversationState('complete');
            addBotMessage(getText('completion'));
            submitOrder({ ...orderData, pincode: cleanPincode });
          }
        } else {
          addBotMessage(getText('invalidPincode'));
        }
        break;

      case 'customerType':
        // Step 8A: Customer type (only for orders)
        // Accept common variations
        const customerTypeLower = lowerInput;
        let validCustomerType = input;
        
        if (customerTypeLower.includes('retailer') || customerTypeLower === '1') {
          validCustomerType = 'Retailer';
        } else if (customerTypeLower.includes('distributor') || customerTypeLower === '2') {
          validCustomerType = 'Distributor';
        } else if (customerTypeLower.includes('end') || customerTypeLower.includes('customer') || customerTypeLower === '3') {
          validCustomerType = 'End Customer';
        }
        
        setOrderData(prev => ({ ...prev, customerType: validCustomerType }));
        setConversationState('productSize');
        const productSizeButtons = [
          { label: '1. 200ml', value: '200ml' },
          { label: '2. 500ml', value: '500ml' },
          { label: '3. 1 Litre', value: '1 Litre' }
        ];
        addBotMessage(getText('productSize'), 100, productSizeButtons);
        break;

      case 'productSize':
        // Step 8B: Product size selection
        // Accept button clicks or typed input
        let selectedSize = input;
        if (lowerInput.includes('200') || lowerInput === '200ml' || lowerInput === '1' || lowerInput.startsWith('1.')) {
          selectedSize = '200ml';
        } else if (lowerInput.includes('500') || lowerInput === '500ml' || lowerInput === '2' || lowerInput.startsWith('2.')) {
          selectedSize = '500ml';
        } else if (lowerInput.includes('1') && (lowerInput.includes('litre') || lowerInput.includes('liter') || lowerInput.includes('l')) || lowerInput === '3' || lowerInput.startsWith('3.')) {
          selectedSize = '1 Litre';
        } else {
          // If input doesn't match, show buttons again
          const productSizeButtons = [
            { label: '1. 200ml', value: '200ml' },
            { label: '2. 500ml', value: '500ml' },
            { label: '3. 1 Litre', value: '1 Litre' }
          ];
          addBotMessage("Please select a valid product size (1, 2, or 3).", 100, productSizeButtons);
          return;
        }
        
        setOrderData(prev => ({ ...prev, productSize: selectedSize }));
        setConversationState('quantity');
        const quantityButtons = [
          { label: '1. 1 Case (15 bottles)', value: '1 Case' },
          { label: '2. 2 Cases (30 bottles)', value: '2 Cases' },
          { label: '3. 5 Cases (75 bottles)', value: '5 Cases' },
          { label: '4. 10 Cases (150 bottles)', value: '10 Cases' },
          { label: '5. Custom Quantity', value: 'Custom' }
        ];
        addBotMessage(getText('quantity'), 100, quantityButtons);
        break;

      case 'quantity':
        // Step 8C: Quantity selection
        if (lowerInput === 'custom' || lowerInput.includes('custom') || lowerInput === '5' || lowerInput.startsWith('5.')) {
          // User wants to enter custom quantity, ask for it
          setConversationState('quantityCustom');
          addBotMessage("Please enter the number of cases you need:");
        } else {
          // Accept button clicks or typed input
          let selectedQuantity = input;
          if (lowerInput.includes('1 case') || lowerInput === '1' || lowerInput.startsWith('1.') || lowerInput.includes('one case')) {
            selectedQuantity = '1 Case';
          } else if (lowerInput.includes('2 case') || lowerInput === '2' || lowerInput.startsWith('2.') || lowerInput.includes('two case')) {
            selectedQuantity = '2 Cases';
          } else if (lowerInput.includes('5 case') || lowerInput === '3' || lowerInput.startsWith('3.') || lowerInput.includes('five case')) {
            selectedQuantity = '5 Cases';
          } else if (lowerInput.includes('10 case') || lowerInput === '4' || lowerInput.startsWith('4.') || lowerInput.includes('ten case')) {
            selectedQuantity = '10 Cases';
          } else {
            // If input doesn't match, show buttons again
            const quantityButtons = [
              { label: '1. 1 Case (15 bottles)', value: '1 Case' },
              { label: '2. 2 Cases (30 bottles)', value: '2 Cases' },
              { label: '3. 5 Cases (75 bottles)', value: '5 Cases' },
              { label: '4. 10 Cases (150 bottles)', value: '10 Cases' },
              { label: '5. Custom Quantity', value: 'Custom' }
            ];
            addBotMessage("Please select a valid quantity option (1-5).", 100, quantityButtons);
            return;
          }
          
          setOrderData(prev => ({ ...prev, quantity: selectedQuantity }));
          setConversationState('purpose');
          const purposeButtons = [
            { label: '1. Retail Sale', value: 'Retail Sale' },
            { label: '2. Distribution', value: 'Distribution' },
            { label: '3. Personal Use', value: 'Personal Use' },
            { label: '4. Event/Function', value: 'Event/Function' },
            { label: '5. Other', value: 'Other' }
          ];
          addBotMessage(getText('purpose'), 100, purposeButtons);
        }
        break;

      case 'quantityCustom':
        // Step 8C-Alt: Custom quantity input
        setOrderData(prev => ({ ...prev, quantity: input }));
        setConversationState('purpose');
        const purposeButtons = [
          { label: '1. Retail Sale', value: 'Retail Sale' },
          { label: '2. Distribution', value: 'Distribution' },
          { label: '3. Personal Use', value: 'Personal Use' },
          { label: '4. Event/Function', value: 'Event/Function' },
          { label: '5. Other', value: 'Other' }
        ];
        addBotMessage(getText('purpose'), 100, purposeButtons);
        break;

      case 'purpose':
        // Step 8D: Purpose selection
        // Accept button clicks or typed input
        let selectedPurpose = input;
        if (lowerInput.includes('retail') || lowerInput === '1' || lowerInput.startsWith('1.')) {
          selectedPurpose = 'Retail Sale';
        } else if (lowerInput.includes('distribut') || lowerInput === '2' || lowerInput.startsWith('2.')) {
          selectedPurpose = 'Distribution';
        } else if (lowerInput.includes('personal') || lowerInput === '3' || lowerInput.startsWith('3.')) {
          selectedPurpose = 'Personal Use';
        } else if (lowerInput.includes('event') || lowerInput.includes('function') || lowerInput === '4' || lowerInput.startsWith('4.')) {
          selectedPurpose = 'Event/Function';
        } else if (lowerInput === 'other' || lowerInput === '5' || lowerInput.startsWith('5.')) {
          selectedPurpose = 'Other';
        } else {
          // If input doesn't match, show buttons again
          const purposeButtons = [
            { label: '1. Retail Sale', value: 'Retail Sale' },
            { label: '2. Distribution', value: 'Distribution' },
            { label: '3. Personal Use', value: 'Personal Use' },
            { label: '4. Event/Function', value: 'Event/Function' },
            { label: '5. Other', value: 'Other' }
          ];
          addBotMessage("Please select a valid purpose option (1-5).", 100, purposeButtons);
          return;
        }
        
        setOrderData(prev => {
          // Auto-generate requirements string from collected data
          const requirements = `Product Size: ${prev.productSize}, Quantity: ${prev.quantity}, Purpose: ${selectedPurpose}`;
          const updatedData = { ...prev, purpose: selectedPurpose, requirements };
          
          // Log the collected data
          console.log('Order Data Collected:', updatedData);
          
          // Send data to backend
          submitOrder(updatedData);
          
          return updatedData;
        });
        setConversationState('complete');
        addBotMessage(getText('completion'));
        break;

      case 'orderNumber':
        // Step 3: Order Number/Tracking ID for delivery tracking (simplified flow)
        if (input.trim().length < 3) {
          addBotMessage(getText('invalidOrderNumber'));
          return;
        }
        setOrderData(prev => {
          const updatedData = { ...prev, orderNumber: input.trim() };
          
          // Log the delivery tracking request
          console.log('Delivery Status Request:', {
            orderNumber: input.trim(),
            intent: 'delivery'
          });
          
          // Send delivery status request to backend
          submitOrder(updatedData);
          
          return updatedData;
        });
        setConversationState('complete');
        addBotMessage(getText('deliveryStatus'), 500);
        setTimeout(() => {
          addBotMessage(getText('deliveryCompletion'), 1000);
        }, 1500);
        break;

      default:
        addBotMessage(getText('initial'));
    }
  };

  const submitOrder = async (data) => {
    try {
      // In production, replace with actual API endpoint
      // const response = await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      console.log('Order submitted:', data);
      
      // You can also send to WhatsApp Business API or email
      // sendToWhatsApp(data);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetConversation = () => {
    setMessages([]);
    setConversationState('initial');
    setLanguage('');
    setOrderData({
      intent: '',
      name: '',
      mobile: '',
      email: '',
      city: '',
      pincode: '',
      customerType: '',
      requirements: ''
    });
    addBotMessage(content.en.initial);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '917090009669'; // +91 7090009669
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
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

      {/* Chat Window */}
      {isOpen && (
        <div className="order-bot-window">
          {/* Header */}
          <div className="order-bot-header">
            <div className="bot-info">
              <h3>Assistant</h3>
            </div>
            <button 
              className="reset-button" 
              onClick={resetConversation}
              title="Reset conversation"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="order-bot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.type === 'bot' && (
                  <div className="message-avatar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                    </svg>
                  </div>
                )}
                <div className="message-bubble">
                  <div className="message-text">{message.text}</div>
                  {message.buttons && message.buttons.length > 0 && (
                    <div className="quick-reply-buttons">
                      {message.buttons.map((button, btnIndex) => (
                        <button
                          key={btnIndex}
                          className="quick-reply-btn"
                          onClick={() => handleButtonClick(button.value)}
                        >
                          {button.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {conversationState !== 'complete' && (
            <div className="order-bot-input">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={getText('placeholder')}
                disabled={conversationState === 'complete'}
              />
              <button 
                onClick={handleSend}
                disabled={!currentInput.trim() || conversationState === 'complete'}
                className="send-button"
              >
                {getText('send')}
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

