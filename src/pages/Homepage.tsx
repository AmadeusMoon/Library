import DarkThemeReading from '../assets/DarkThemeReading.jpg';
import LightThemeReading from '../assets/LightThemeReading.jpg';
import Event from '../assets/Event.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../state/state';
import './styles/Homepage.css';

function Homepage() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const readingImage =
    theme === 'LightTheme' ? LightThemeReading : DarkThemeReading;
  const eventImage = Event;
  const aboutImage = '';

  return (
    <div
      className="homepage"
      id="homepage"
    >
      {/* Topside content */}
      <div
        className="topside"
        id="topside"
      >
        {/* Logo */}
        <Navbar />
      </div>
      {/* Hero section */}
      <div
        className="hero-section"
        id="hero-section"
      >
        <p className={`hero-text-${theme}`}>Librarium Imperialis</p>
      </div>
      <div
        className="ad1"
        id="ad1"
      >
        Ad 1
      </div>
      {/* Main Content */}
      <div
        className="main-content"
        id="main-content"
      >
        <div
          className={`redirect-reading-${theme}`}
          id="redirect-reading"
        >
          <img
            src={readingImage}
            alt={`${theme} mecanicus priest image inviting you to read`}
            className="image"
          />
          <h2>Citizen,</h2>
          <h3>The Ecclesiarchy Commands Your Presence</h3>
          <p>
            The Emperor's word demands your attention. It is not a request, but
            a duty. A duty to the Emperor, to the Imperium, to your very soul.
          </p>
          <h3>Your Shield Against the Darkness</h3>
          <p>
            That's his word, is your shield against the darkness. Neglect it,
            and you open yourself to chaos, to heresy.
          </p>
          <h3>Attend the Reading</h3>
          <p>
            Heresy is not a path you wish to tread. Attend the reading. Absorb
            His wisdom.
          </p>
          <h3>For Your Own Good</h3>
          <p>
            It is for your own good, for the well-being of your soul. There is
            no choice in this matter. Only obedience.
          </p>
          <h2>The Emperor Protects.</h2>
        </div>
        <div
          className="redirect-events"
          id="redirect-events"
        >
          <img
            src={eventImage}
            alt="Your Image"
            className="image2"
          />
          <p>
            Redirect Events sssssssssssssssssssssss sssssssssssssssssssss
            ssssssssssssssss ssssssssssssssssssss ssssssssssssssssssss
            ssssssssssssssssssss
          </p>
        </div>
        <div
          className="redirect-about"
          id="redirect-about"
        >
          <img
            src={aboutImage}
            alt="Your Image"
            className="image3"
          />
          Redirect About
        </div>
      </div>
      <div
        className="ad2"
        id="ad2"
      >
        Ad 2
      </div>
      {/* Footer  */}
      <div
        className="footer"
        id="footer"
      >
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
