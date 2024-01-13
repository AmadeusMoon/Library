import { RootState } from '../state/state';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/Contact.css';

function Contact() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div
      className={`contact-${theme}`}
      id="contact"
    >
      <Navbar />
      <div
        className="navbar"
        id="navbar-contact"
      ></div>
      <div
        className="body"
        id="body-contact"
      ></div>
      <div
        className="footer"
        id="footer-contact"
      ></div>
      <Footer />
    </div>
  );
}

export default Contact;
