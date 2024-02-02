import LightThemeReading from '../../../assets/LightThemeReading.jpg';
import DarkThemeReading from '../../../assets/DarkThemeReading.jpg';
import { RootState } from '../../../state/state';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        <h2>Citizen,</h2>

        <h4>The Ecclesiarchy Commands Your Presence</h4>

        <p>
          The Emperor's word demands your attention. It is not a request, but a
          duty. A duty to the Emperor, to the Imperium, to your very soul.
        </p>

        <h4>Your Shield Against the Darkness</h4>

        <p>
          That's his word, is your shield against the darkness. Neglect it, and
          you open yourself to chaos, to heresy.
        </p>

        <h4>Attend the Reading</h4>

        <p>
          Heresy is not a path you wish to tread. Attend the reading. Absorb His
          wisdom.
        </p>

        <h4>For Your Own Good</h4>

        <p>
          It is for your own good, for the well-being of your soul. There is no
          choice in this matter. Only obedience.
        </p>

        <h2 style={{ textDecoration: 'underline' }}>The Emperor Protects.</h2>
      </div>
    </div>
  );
}

export default RedirectReading;
