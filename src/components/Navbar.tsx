import { RootState } from '../state/state';
import { useSelector } from 'react-redux';
import ThemeChanger from './ThemeChanger';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      className={`navbar ${theme}`}
      id="navbar"
    >
      <Link
        className="navbar-link-to-homepage"
        id="navbarlinktohomepage"
        to={'/'}
      >
        Homepage
      </Link>
      <Link
        className="navbar-link-to-booklisting"
        id="navbarlinktobooklisting"
        to={'/booklisting'}
      >
        Books
      </Link>
      <Link
        className="navbar-link-to-events"
        id="navbarlinktoevents"
        to={'/events'}
      >
        Events
      </Link>
      <ThemeChanger />
    </div>
  );
}
export default Navbar;
