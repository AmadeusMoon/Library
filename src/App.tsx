import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BookListing from './pages/booklisting/BookListing';
import BookPreview from './pages/bookpreview/BookPreview';
import BookReading from './pages/bookreading/BookReading';
import { useSelector } from 'react-redux';
import { RootState } from './state/state';
import Homepage from './pages/homepage/Homepage';
import Contact from './pages/contact/Contact';
import Privacy from './pages/privacy/Privacy';
import Events from './pages/events/Events';
import About from './pages/about/About';
import './App.css';

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

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
