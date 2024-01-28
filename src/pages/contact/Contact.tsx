import { RootState } from '../../state/state';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './styles/Contact.css';
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactText from './components/ContactText';

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
        className="content-contact"
        id="content-contact"
      >
        <ContactText />
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
