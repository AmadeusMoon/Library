import LightThemeReading from '../../../assets/LightThemeReading.jpg';
import DarkThemeReading from '../../../assets/DarkThemeReading.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/state';

function RedirectReading() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  // Images inside main content
  const readingImage =
    theme === 'LightTheme' ? LightThemeReading : DarkThemeReading;
  // Import navigate and set it to variable
  const navigate = useNavigate();
  // Create redirect function for images
  const redirect = (path: string) => {
    navigate(path);
  };
  return (
    <div
      className={`redirect-reading`}
      id="redirect-reading"
    >
      <img
        src={readingImage}
        alt={`${theme} mecanicus priest image inviting you to read`}
        className="image"
        onClick={() => redirect('/booklisting')}
      />
      <div className="text-container-reading">
        <h1>Citizen,</h1>
        <h3>The Ecclesiarchy Commands Your Presence</h3>
        <p>
          The Emperor's word demands your attention. It is not a request, but a
          duty. A duty to the Emperor, to the Imperium, to your very soul.
        </p>
        <h3>Your Shield Against the Darkness</h3>
        <p>
          That's his word, is your shield against the darkness. Neglect it, and
          you open yourself to chaos, to heresy.
        </p>
        <h3>Attend the Reading</h3>
        <p>
          Heresy is not a path you wish to tread. Attend the reading. Absorb His
          wisdom.
        </p>
        <h3>For Your Own Good</h3>
        <p>
          It is for your own good, for the well-being of your soul. There is no
          choice in this matter. Only obedience.
        </p>
        <h2>The Emperor Protects.</h2>
      </div>
    </div>
  );
}

export default RedirectReading;
