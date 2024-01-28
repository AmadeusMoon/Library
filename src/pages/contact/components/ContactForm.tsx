import './styles/ContactForm.css';
import { useState } from 'react';
import Slider from './Slider';

function ContactForm({ formType }: { formType: string }) {
  // State for values
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  // Fill or empty array of values on checkbox
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedValues([...checkedValues, event.target.value]);
    } else {
      setCheckedValues(
        checkedValues.filter((item) => item !== event.target.value)
      );
    }
  };
  // Define components of slider
  const components = checkedValues.map((value, index) => (
    <div
      className="message-container"
      key={index}
    >
      <label htmlFor={value}>{value}:</label>
      <textarea
        className={`${value}-input`}
        placeholder={` Enter feedback for ${value} page`}
      />
    </div>
  ));

  return formType === 'Feedback' ? (
    <div className="feedback-form">
      <div className="feedback-checkboxes">
        <label htmlFor="Privacy">
          <input
            id="Privacy"
            type="checkbox"
            value="Privacy"
            onChange={handleChange}
          />
          Privacy
        </label>
        <label htmlFor="Homepage">
          <input
            id="Homepage"
            type="checkbox"
            value="Homepage"
            onChange={handleChange}
          />
          Homepage
        </label>
        <label htmlFor="Events">
          <input
            id="Events"
            type="checkbox"
            value="Events"
            onChange={handleChange}
          />
          Events
        </label>
        <label htmlFor="Contact">
          <input
            id="Contact"
            type="checkbox"
            value="Contact"
            onChange={handleChange}
          />
          Contact
        </label>
        <label htmlFor="About">
          <input
            id="About"
            type="checkbox"
            value="About"
            onChange={handleChange}
          />
          About
        </label>
        <label htmlFor="BookReading">
          <input
            id="bookReading"
            type="checkbox"
            value="BookReading"
            onChange={handleChange}
          />
          BookReading
        </label>
        <label htmlFor="BookPreview">
          <input
            id="BookPreview"
            type="checkbox"
            value="BookPreview"
            onChange={handleChange}
          />
          BookPreview
        </label>
        <label htmlFor="BookListing">
          <input
            id="BookListing"
            type="checkbox"
            value="BookListing"
            onChange={handleChange}
          />
          BookListing
        </label>
      </div>
      <div className="message-boxes">
        <Slider components={components} />
      </div>
      <div className="column-3">
        <div className="email-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="email-input"
            placeholder="Enter your email (optional)"
          />
        </div>
        <button
          type="submit"
          className="submit-button"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  ) : formType === 'Bugs' ? (
    <div></div>
  ) : (
    <div></div>
  );
}
export default ContactForm;
