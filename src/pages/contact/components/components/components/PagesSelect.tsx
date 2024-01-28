import { useState } from 'react';

function PagesSelector() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as Option);
  };

  // Type of bug report options
  type Option =
    | 'Privacy'
    | 'Homepage'
    | 'Events'
    | 'Contact'
    | 'Bookreading'
    | 'BookPreview'
    | 'Booklisting'
    | 'About';

  return (
    <div
      className="bug-report-page-selector"
      id="bugreportpageselector"
    >
      <select
        className="bug-report-page-selector"
        id="bugreportpageselector"
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
          className="Privacy"
          id="privacy"
          value="Privacy"
        >
          Privacy
        </option>
        <option
          className="Homepage"
          id="homepage"
          value="Homepage"
        >
          Homepage
        </option>
        <option
          className="Events"
          id="events"
          value="Events"
        >
          Events
        </option>
        <option
          className="Contact"
          id="contact"
          value="Contact"
        >
          Contact
        </option>
        <option
          className="book-reading"
          id="bookreading"
          value="Book reading"
        >
          Bookreading
        </option>
        <option
          className="book-preview"
          id="bookpreview"
          value="Book preview"
        >
          Bookpreview
        </option>
        <option
          className="book-listing"
          id="booklisting"
          value="Book listing"
        >
          Booklisting
        </option>
        <option
          className="About"
          id="about"
          value="About"
        >
          About
        </option>
      </select>
    </div>
  );
}

export default PagesSelector;
