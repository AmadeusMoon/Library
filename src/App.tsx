import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import BookListing from './pages/BookListing';
import BookPreview from './pages/BookPreview';
import BookReading from './pages/BookReading';
import Events from './pages/Events';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeState } from './state/reducers/theme';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state: ThemeState) => state.theme);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/privacy"
            element={<Privacy />}
          />
          <Route
            path="/booklisting"
            element={<BookListing />}
          />
          <Route
            path="/bookpreview"
            element={<BookPreview />}
          />
          <Route
            path="/bookreading"
            element={<BookReading />}
          />
          <Route
            path="/events"
            element={<Events />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
