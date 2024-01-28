import './styles/ImageUpload.css';
import { useState } from 'react';

function ImageUpload() {
  const [error, setError] = useState('');
  // Check user file input
  const checkFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if user selected file
    if (!event.target.files) {
      return;
    }
    // Check file type
    const file = event.target.files[0];
    // Allow only png and jpeg
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      // Create error
      setError('Invalid file type. Only PNG and JPEG files are allowed.');
      // Reset value
      event.target.value = '';
      // Clear error after 10 sec
      setTimeout(() => {
        setError('');
      }, 6000);
    }
  };
  return (
    <div
      className="image-upload"
      id="imageupload"
    >
      <label
        htmlFor="issue-image"
        className="issue-image-label"
        id="issueimagelabel"
      >
        Upload an image:
      </label>
      <input
        type="file"
        id="issue-image"
        name="issue-image"
        className="issue-image"
        accept="image/png, image/jpeg"
        onChange={checkFile}
      />
      <div
        className="error"
        id="error"
      >
        {error ? error : null}
      </div>
    </div>
  );
}

export default ImageUpload;
