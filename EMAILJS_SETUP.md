# EmailJS Setup Guide

To enable email functionality in the contact form, you need to set up EmailJS (free service).

## Steps:

1. **Sign up for EmailJS** (Free account)
   - Go to https://www.emailjs.com/
   - Create a free account

2. **Create an Email Service**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose "Gmail" (or your preferred email provider)
   - Connect your Gmail account (mavuri9848@gmail.com)
   - Note down your **Service ID**

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use this template:
   
   ```
   Subject: New Contact Form Submission - {{subject}}
   
   From: {{from_name}} ({{from_email}})
   Phone: {{phone}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Full Details:
   {{email_body}}
   ```
   
   - Set "To Email" to: `mavuri9848@gmail.com`
   - Note down your **Template ID**

4. **Get your Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Update Contact.jsx**
   - Open `src/components/Contact.jsx`
   - Replace these values:
     - `YOUR_SERVICE_ID` → Your Service ID
     - `YOUR_TEMPLATE_ID` → Your Template ID  
     - `YOUR_PUBLIC_KEY` → Your Public Key

## Alternative: Use Environment Variables

Create a `.env` file in the root directory:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update Contact.jsx to use:
```javascript
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```


