import { RootState } from '../state/state';
import { useSelector } from 'react-redux';
import ThemeChanger from './ThemeChanger';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={`navbar ${theme}`}>
      <ThemeChanger />
      <Link to={'/'}>Homepage</Link>
      <Link to={'/booklisting'}>Books</Link>
      <Link to={'/events'}>Events</Link>
    </div>
  );
}
export default Navbar;
