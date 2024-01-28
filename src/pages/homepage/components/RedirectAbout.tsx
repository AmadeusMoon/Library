import { useNavigate } from 'react-router-dom';
import About from '../../../assets/AmadeusDuCaine.jpg';

function RedirectAbout() {
  // Import navigate and set it to variable
  const navigate = useNavigate();
  // Create redirect function for images
  const redirect = (path: string) => {
    navigate(path);
  };
  // Store image in variable
  const aboutImage = About;
  return (
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
      <div className="text-container-about">
        <h1>Greetings, warriors of the Imperium.</h1>
        <p>
          I am Amadeus DuCaine, Lord Commander of the X Legion, the Storm
          Walkers, the Iron Hands. I have fought for the Emperor since the dawn
          of the Great Crusade, when we brought His light to countless worlds.
          He is our Master, our Creator, our Father.
        </p>

        <h3>
          But now, He is in peril, on Terra, surrounded by the traitors who
          turned against Him and His vision.
        </h3>
        <p>
          They are led by the Warmaster, Horus, the arch-heretic, the betrayer.
          He is the one who ambushed us on Istvaan V, the day of infamy, the day
          of loss. He is the one who killed many of our brothers, and many more
          of our primarchs, the sons of the Emperor. He is the one who seeks to
          overthrow the Imperium, and plunge the galaxy into darkness.
        </p>

        <h3>
          But we will not give up, we will not surrender, we will not die.
        </h3>
        <p>
          We are the Iron Hands, we are the sons of the Emperor, we are the
          storm that walks. We will fight on, we will resist, we will endure. We
          will make them fear us, we will make them hate us, we will make them
          suffer. We will carry on the legacy of the Emperor, we will uphold His
          ideals, we will forge our own destiny. We are iron, we are steel, we
          are death.
        </p>

        <h2>Join us, brothers. Join the Storm Walkers.</h2>
        <p>
          Together, we will make the traitors pay. Together, we will defend the
          Emperor. Together, we will win this war. For the Imperium. For the
          Emperor.
        </p>
      </div>
    </div>
  );
}

export default RedirectAbout;
