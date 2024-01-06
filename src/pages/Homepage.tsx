import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './styles/Homepage.css';
import { useSelector } from 'react-redux';
import { RootState } from '../state/state';

function Homepage() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  console.log(theme);

  return (
    <div
      className="homepage"
      id="homepage"
    >
      {/* Navigation Bar */}
      <div
        className="navbar"
        id="navbar"
      >
        <Navbar />
      </div>
      {/* Hero section */}
      <div
        className="hero-section"
        id="hero-section"
      >
        <p className={`hero-text-${theme}`}>Your Text Here</p>
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
          className="redirect-reading"
          id="redirect-reading"
        >
          Redirect Reading
        </div>
        <div
          className="redirect-events"
          id="redirect-events"
        >
          Redirect Events
        </div>
        <div
          className="redirect-about"
          id="redirect-about"
        >
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
