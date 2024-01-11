import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/Privacy.css';
import { RootState } from '../state/state';

function Privacy() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={`privacy ${theme}`}>
      <Navbar />
      <div className="content">
        <h1>Privacy Policy for Librarium Imperialis</h1>
        <div className="section">
          <h2>Your Privacy</h2>
          <p>
            Your privacy is important to us. It is Librarium Imperialis' policy
            to respect your privacy and comply with any applicable law and
            regulation regarding any personal information we may collect about
            you, including across our website, https://librariumimperialis.com,
            and other sites we own and operate.
          </p>
        </div>
        <div className="section">
          <h2>Information We Collect</h2>
          <p>
            Information we collect includes but is not limited to username,
            email address, and contact preferences. This information is used to
            provide you with a better user experience and to improve the quality
            of our services.
          </p>
        </div>
        <div className="section">
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, and to develop new ones. We also use this information
            to offer you tailored content.
          </p>
        </div>
        <div className="section">
          <h2>Information Security</h2>
          <p>
            We work hard to protect our users from unauthorized access to or
            unauthorized alteration, disclosure, or destruction of information
            we hold.
          </p>
        </div>
      </div>
      <div
        className="footer"
        id="footer"
      >
        <Footer />
      </div>
    </div>
  );
}

export default Privacy;
