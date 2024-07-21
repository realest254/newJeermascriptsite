import React, { useState } from 'react';
import './ContactPage.css';
import Key from '../../../../Experts-Parlor/utils.js';

// Replace this with your actual access key
const accessKey = Key;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
    botCheck: '' // Hidden field for bot detection
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: '' });
    
    // Telephone validation
    if (name === 'tel') {
      if (value.length < 8 || value.length > 15) {
        setErrors({ ...errors, tel: 'Telephone number must be between 8 and 15 characters' });
      } else {
        setErrors({ ...errors, tel: '' });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.tel.trim()) {
      newErrors.tel = 'Telephone is required';
    } else if (formData.tel.length < 8 || formData.tel.length > 15) {
      newErrors.tel = 'Telephone number must be between 8 and 15 characters';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.botCheck) newErrors.botCheck = 'Bot detected';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus('Please wait...');
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            ...formData
          })
        });

        const result = await response.json();
        if (response.status === 200) {
          setSubmitStatus('Form submitted successfully');
          setFormData({ name: '', email: '', tel: '', message: '', botCheck: '' });
          setFormSubmitted(true); // Add this line
          setTimeout(() => setFormSubmitted(false), 5000); // Reset after 5 seconds
        } else {
          setSubmitStatus(result.message || 'Something went wrong!');
        }
      } catch (error) {
        setSubmitStatus('Something went wrong!');
      }

      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <div className="contact-info">
          <h2>CONTACT US</h2>
          <h4>Email:</h4>
          <span>info@jeermascriptagency.africa</span>
          <h4>Telephone:</h4>
          <span>+254 716517964</span>
          <p>Please feel free to contact us for any inquiries.</p>
        </div>
        <div className="contact-form">
          <h2>CONTACT FORM</h2>
          <form onSubmit={handleSubmit} noValidate className={formSubmitted ? 'form-submitted' : ''}>
            <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className={`form-group ${errors.email ? 'invalid' : ''}`}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className={`form-group ${errors.tel ? 'invalid' : ''}`}>
              <input
                type="tel"
                name="tel"
                placeholder="Telephone"
                value={formData.tel}
                onChange={handleChange}
                required
              />
              {errors.tel && <span className="error-message">{errors.tel}</span>}
            </div>
            <div className={`form-group ${errors.message ? 'invalid' : ''}`}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <input
              type="hidden"
              name="botCheck"
              onChange={handleChange}
              style={{ display: 'none' }}
            />
            <button type="submit">Send Message</button>
          </form>
          {submitStatus && <div className="submit-status">{submitStatus}</div>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;