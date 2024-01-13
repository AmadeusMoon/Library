import { RootState } from '../state/state';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <footer className={`footer-${theme}`}>
      <div className="authorship">
        <p>© 2024 Your Name or Your Organization's Name</p>
      </div>
      <div className="contact">
        <Link to={'/contact'}>Contact</Link>
      </div>
      <div className="about">
        <Link to={'/about'}>About</Link>
      </div>
      <div className="privacy">
        <Link to={'/privacy'}>Privacy</Link>
      </div>
      <div className="newsletter">
        <form
          action="/subscribe"
          method="post"
        >
          <label htmlFor="email">Subscribe:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <input
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/your-profile">Facebook</a>
        <a href="https://www.twitter.com/your-profile">Twitter</a>
      </div>
    </footer>
  );
}
export default Footer;
