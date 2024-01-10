import DarkThemeReading from '../assets/DarkThemeReading.jpg';
import LightThemeReading from '../assets/LightThemeReading.jpg';
import Logo from '../assets/logo.png';
import Event from '../assets/Event.jpg';
import About from '../assets/AmadeusDuCaine.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../state/state';
import './styles/Homepage.css';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const readingImage =
    theme === 'LightTheme' ? LightThemeReading : DarkThemeReading;
  const eventImage = Event;
  const aboutImage = About;
  const navigate = useNavigate();
  // Create redirect function for images
  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className="homepage"
      id="homepage"
    >
      <img
        src={Logo}
        alt={`Page Logo ( a lectern with an open book )`}
        className="logo"
        onClick={() => redirect('/')}
      />
      {/* Topside content */}
      <div
        className="topside"
        id="topside"
      >
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
            onClick={() => redirect('/booklisting')}
          />
          <div className="text-container">
            <h1>Citizen,</h1>
            <h3>The Ecclesiarchy Commands Your Presence</h3>
            <p>
              The Emperor's word demands your attention. It is not a request,
              but a duty. A duty to the Emperor, to the Imperium, to your very
              soul.
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
        </div>
        <div
          className="redirect-events"
          id="redirect-events"
        >
          <div className="text-container2">
            <h1>Esteemed servant of the Emperor,</h1>

            <h3>Invitation</h3>
            <p>
              You have been invited by the Inquisition to attend a distinguished
              and confidential social event that will acknowledge your service,
              merit, and loyalty. You will have the privilege of meeting other
              distinguished individuals from various branches of the Imperium,
              and partake in a night of discourse, enlightenment, and communion.
            </p>

            <h3>Location</h3>
            <p>
              The event will take place in the Inquisitorial Sanctum, in the
              Segmentum Obscurus. You will have the opportunity to witness the
              glory and wisdom of the Emperors chosen.
            </p>

            <h3>Agenda</h3>
            <p>
              The Inquisition has arranged a special agenda for you and your
              fellow guests, where you will be honoured with the finest gifts
              and accolades.
            </p>

            <h3>Acceptance</h3>
            <p>
              To accept this invitation, you are expected to contact your
              nearest branch of the Eclessiarchy and present them with the
              contents of the invitation. There, you will receive further
              details and instructions. Do not neglect this offer, for the
              Emperor's blessing is rare and precious.
            </p>

            <h2>Remember, the Emperor protects.</h2>

            <p>In His name,</p>
            <p>Amadeus DuCaine</p>
          </div>
          <img
            src={eventImage}
            alt="Inquisitor giving a speech about at a grand event"
            className="image2"
            onClick={() => redirect('/events')}
          />
        </div>
        <div
          className="redirect-about"
          id="redirect-about"
        >
          <img
            src={aboutImage}
            alt="Amadeus DuCaine telling you about the 10th legion"
            className="image3"
            onClick={() => redirect('/about')}
          />
          <div className="text-container3">
            <h1>Greetings, warriors of the Imperium.</h1>
            <p>
              I am Amadeus DuCaine, Lord Commander of the X Legion, the Storm
              Walkers, the Iron Hands. I have fought for the Emperor since the
              dawn of the Great Crusade, when we brought His light to countless
              worlds. He is our Master, our Creator, our Father.
            </p>

            <h3>
              But now, He is in peril, on Terra, surrounded by the traitors who
              turned against Him and His vision.
            </h3>
            <p>
              They are led by the Warmaster, Horus, the arch-heretic, the
              betrayer. He is the one who ambushed us on Istvaan V, the day of
              infamy, the day of loss. He is the one who killed many of our
              brothers, and many more of our primarchs, the sons of the Emperor.
              He is the one who seeks to overthrow the Imperium, and plunge the
              galaxy into darkness.
            </p>

            <h3>
              But we will not give up, we will not surrender, we will not die.
            </h3>
            <p>
              We are the Iron Hands, we are the sons of the Emperor, we are the
              storm that walks. We will fight on, we will resist, we will
              endure. We will make them fear us, we will make them hate us, we
              will make them suffer. We will carry on the legacy of the Emperor,
              we will uphold His ideals, we will forge our own destiny. We are
              iron, we are steel, we are death.
            </p>

            <h2>Join us, brothers. Join the Storm Walkers.</h2>
            <p>
              Together, we will make the traitors pay. Together, we will defend
              the Emperor. Together, we will win this war. For the Imperium. For
              the Emperor.
            </p>
          </div>
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
