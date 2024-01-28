import ContactForm from './components/ContactForm';
import ContactText from './components/ContactText';
import { RootState } from '../../state/state';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import './styles/Contact.css';

function Contact() {
  // Insert theme state
  const theme = useSelector((state: RootState) => state.theme.theme);
  // Type of Form options
  type Option = 'Feedback' | 'Bug Report' | 'Contact';
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
            <option
              className="select-an-option"
              id="selectanoption"
              value="Select an option"
            >
              Select an option
            </option>
            <option
              className="Feedback"
              id="feedback"
              value="Feedback"
            >
              Feedback
            </option>
            <option
              className="bug-report"
              id="bugreport"
              value="Bug Report"
            >
              Bug Report
            </option>
            <option
              className="Contact"
              id="contact"
              value="Contact"
            >
              Contact
            </option>
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
