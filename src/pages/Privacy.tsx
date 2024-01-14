import { RootState } from '../state/state';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/Privacy.css';

function Privacy() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`privacy-${theme}`}
      id="privacy"
    >
      <Navbar />
      <div
        className="body-privacy"
        id="body-privacy"
      >
        <h1>Privacy Policy for Librarium Imperialis</h1>
        <div className="section">
          <h2>Your Privacy</h2>
          <ul>
            <li>
              At Librarium Imperialis, we deeply respect and value your privacy.
            </li>
            <li>
              We prioritize your privacy and ensure that we are in full
              compliance with any applicable laws and regulations concerning the
              collection and handling of your personal information.
            </li>
            <li>
              This applies across our main website, as well as any other sites
              that we own and operate.
            </li>
            <li>
              We understand the importance of maintaining your trust and
              confidence and assure you that any information you provide us will
              be handled with the utmost care.
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Information We Collect</h2>
          <ul>
            <li>
              The information we collect from our users includes, but is not
              limited to, usernames, email addresses, and contact preferences.
            </li>
            <li>
              We collect this information with the primary aim of enhancing your
              user experience on our platform.
            </li>
            <li>
              By understanding your preferences and needs, we can tailor our
              services to meet them effectively.
            </li>
            <li>
              This information also helps us improve the overall quality of our
              services, ensuring that we can serve you better and meet your
              expectations.
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>How We Use Your Information</h2>
          <ul>
            <li>The information we collect serves multiple purposes.</li>
            <li>
              Primarily, we use it to provide, maintain, and improve our
              existing services.
            </li>
            <li>
              Your information helps us understand how our services are being
              used and how we can enhance them to better meet your needs.
            </li>
            <li>
              We use this information to develop new services that align with
              your interests and requirements.
            </li>
            <li>
              Another key use of your information is in the creation of tailored
              content. By understanding your preferences, we can provide content
              that is most relevant and interesting to you.
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Information Security</h2>
          <ul>
            <li>
              At Librarium Imperialis, we take information security very
              seriously.
            </li>
            <li>
              We are committed to protecting our users from unauthorized access,
              as well as unauthorized alteration, disclosure, or destruction of
              information we hold.
            </li>
            <li>
              We have implemented robust security measures to ensure that your
              personal information is safe and secure.
            </li>
            <li>
              We continually review and update our security practices to ensure
              the highest level of security for your information.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
