import React from 'react';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import BookListing from './pages/BookListing';
import BookPreview from './pages/BookPreview';
import BookReading from './pages/BookReading';
import Events from './pages/Events';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
