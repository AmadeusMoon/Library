import { RootState } from '../state/state';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/Contact.css';
import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  // Form selector
  type Option = 'Feedback' | 'Bugs' | 'Contact';
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [formType, setFormType] = useState<string | ''>('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as Option);
    setFormType(event.target.value as Option);
  };

  return (
    <div
      className={`contact-${theme}`}
      id="contact"
    >
      <Navbar />
      <div
        className="body-contact"
        id="body-contact"
      >
        <div
          className="text-section-contact"
          id="text-section-contact"
        >
          <div>
            <h1>Contact Page</h1>
            <p>
              This page is designed to facilitate communication and improve your
              experience. It consists of three main sections:
            </p>
            <ul>
              <li>
                <strong>Feedback</strong>: This section is dedicated to your
                thoughts and ideas. If you have suggestions on how we can
                improve your experience, or if you have innovative ideas that
                you believe could enhance our page, please share them here. Your
                feedback is invaluable in our continuous effort to improve.
              </li>
              <li>
                <strong>Bug Reporting</strong>: If you encounter any technical
                issues or bugs while using our page, please report them in this
                section. Your reports are crucial for us to maintain the smooth
                operation of our site. Please note that this section is solely
                for reporting bugs and technical issues.
              </li>
              <li>
                <strong>Contact</strong>: This section is for personal contact.
                If you need to reach out to us for serious reasons, please use
                this section. We value all our users and are here to assist you.
                However, we kindly ask that this section be used only for
                serious inquiries to ensure that urgent matters receive timely
                attention.
              </li>
            </ul>
            <p>Thank you for your cooperation and understanding.</p>
          </div>
        </div>
        <div
          className="contact-form-selector"
          id="contact-form-selector"
        >
          <select
            value={selectedOption || ''}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Feedback">Feedback</option>
            <option value="Bugs">Bugs</option>
            <option value="Contact">Contact</option>
          </select>
        </div>
        <div
          className={`${formType}-contact-form`}
          id="contact-form"
        >
          {ContactForm({ formType })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
