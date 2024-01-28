import Event from '../../../assets/eventInquisitor.jpg';
import { useNavigate } from 'react-router-dom';

function RedirectEvents() {
  // Import navigate and set it to variable
  const navigate = useNavigate();
  // Create redirect function for images
  const redirect = (path: string) => {
    navigate(path);
  };
  // Store image path in variable
  const eventsImage = Event;
  return (
    <div
      className="redirect-events"
      id="redirect-events"
    >
      <div className="text-container-events">
        <h1>Esteemed servant of the Emperor,</h1>

        <h3>Invitation</h3>
        <p>
          You have been invited by the Inquisition to attend a distinguished and
          confidential social event that will acknowledge your service, merit,
          and loyalty. You will have the privilege of meeting other
          distinguished individuals from various branches of the Imperium, and
          partake in a night of discourse, enlightenment, and communion.
        </p>

        <h3>Location</h3>
        <p>
          The event will take place in the Inquisitorial Sanctum, in the
          Segmentum Obscurus. You will have the opportunity to witness the glory
          and wisdom of the Emperors chosen.
        </p>

        <h3>Agenda</h3>
        <p>
          The Inquisition has arranged a special agenda for you and your fellow
          guests, where you will be honoured with the finest gifts and
          accolades.
        </p>

        <h2>Remember, the Emperor protects.</h2>

        <p>In His name,</p>
        <p>Amadeus DuCaine</p>
      </div>
      <img
        src={eventsImage}
        alt="Inquisitor giving a speech about at a grand event"
        className="image2"
        onClick={() => redirect('/events')}
      />
    </div>
  );
}

export default RedirectEvents;
