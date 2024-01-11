import { useSelector } from 'react-redux';
import { RootState } from '../state/state';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={`navbar ${theme}`}>
      <Link to={'/'}>Homepage</Link>
      <Link to={'/booklisting'}>Books</Link>
      <Link to={'/events'}>Events</Link>
    </div>
  );
}
export default Navbar;
