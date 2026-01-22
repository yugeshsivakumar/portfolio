import { useState, useEffect } from 'react';
import { Send, Heart } from 'lucide-react';

interface ContactProps {
  isActive: boolean;
}

const Contact = ({ isActive }: ContactProps) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDonationPopup, setShowDonationPopup] = useState(false);

  useEffect(() => {
    const { fullname, email, message } = formData;
    const isValid = fullname.trim() !== '' && email.trim() !== '' && message.trim() !== '' && email.includes('@');
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!isFormValid) return;

  setIsSubmitting(true);

  try {
    // Use different URLs for development and production
    const apiUrl = import.meta.env.DEV 
      ? 'http://localhost:3001/api/send-email'  // Development
      : '/api/send-email';                       // Production (Vercel)

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert('Message sent successfully! ✅');
      setFormData({ fullname: '', email: '', message: '' });
    } else {
      throw new Error(result.error || 'Failed to send message');
    }
  } catch (error) {
    console.error('Error sending message: ', error);
    alert('Error sending message. Please try again later ❌.');
  } finally {
    setIsSubmitting(false);
  }
};

  const copyBtcAddress = () => {
    const btcAddress = 'bc1qw8g73zlrmnph6lhmrrpmh4lsmwwgqz2kefp387';
    navigator.clipboard.writeText(btcAddress).then(() => {
      alert('Bitcoin address copied to clipboard! 📋');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15514.828354261715!2d80.2398042620824!3d13.082680220941259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d8a5b06ecb%3A0x6f39942d45df4fb7!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1696563793456!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chennai, Tamil Nadu, India"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={formData.fullname}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <div className="button-wrapper contact-buttons">
            <button
              className="form-btn send-btn"
              type="submit"
              data-form-btn
              disabled={!isFormValid || isSubmitting}
            >
              <Send size={16} />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>

            <button
              className="form-btn donate-btn"
              type="button"
              onClick={() => setShowDonationPopup(true)}
            >
              <Heart size={16} fill="currentColor" />
              <span>Donate</span>
            </button>
          </div>
        </form>
      </section>

      {/* Donation Popup */}
      <div
        className="popup"
        id="donation-popup"
        style={{ display: showDonationPopup ? 'flex' : 'none' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowDonationPopup(false);
          }
        }}
      >
        <div className="popup-content">
          <span className="close-popup" onClick={() => setShowDonationPopup(false)}>
            ×
          </span>
          <h3 className="h3 form-title">❤️ Support Me</h3>

          <div className="donation-option">
            <a href="https://paypal.me/Yuge5h" className="donation-link" target="_blank" rel="noopener noreferrer">
              <img alt="PayPal" src="/images/paypal.svg" className="donation-icon" />
            </a>
          </div>

          <div className="donation-option">
            <div className="bitcoin-icon" onClick={copyBtcAddress}>
              <img alt="Bitcoin" src="/images/btc.svg" className="donation-icon" />
            </div>
          </div>

          <span
            className="bitcoin-address"
            id="btc-address"
            style={{ display: 'none' }}
          >
            bc1qw8g73zlrmnph6lhmrrpmh4lsmwwgqz2kefp387
          </span>
        </div>
      </div>
    </article>
  );
};

export default Contact;
