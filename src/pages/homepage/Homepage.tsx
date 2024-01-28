import RedirectReading from './components/RedirectReading';
import RedirectEvents from './components/RedirectEvents';
import RedirectAbout from './components/RedirectAbout';
import { useEffect, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import { RootState } from '../../state/state';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useSelector } from 'react-redux';
import './styles/Homepage.css';
import AD2 from '../AD2';
import AD1 from '../AD1';

function Homepage() {
  // Import theme from redux store
  const theme = useSelector((state: RootState) => state.theme.theme);
  // Create visibility state for the main content elements
  const [isVisible, setIsVisible] = useState([false, false, false]);
  // Type of array reference of references to avoid infinite rerender
  type RefArray = Array<React.MutableRefObject<null>>;
  // Create reference for elements
  const elementRefs = useRef<RefArray>([
    useRef(null),
    useRef(null),
    useRef(null),
  ]);
  // Check for element visibility in viewport on scroll
  useEffect(() => {
    const checkAllVisibility = () => {
      setIsVisible(
        isVisible.map((_, index) => checkVisibility(elementRefs.current[index]))
      );
    };
    window.addEventListener('scroll', checkAllVisibility);
    return () => {
      window.removeEventListener('scroll', checkAllVisibility);
    };
  }, [isVisible]);

  // Check if the element is inside viewport
  const checkVisibility = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const elementHeight = rect.bottom - rect.top;
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      return visibleHeight >= elementHeight / 2;
    }
    // Return false if window not in viewport
    return false;
  };
  // Check for visibility on scroll
  useEffect(() => {
    const checkAllVisibility = () => {
      setIsVisible(
        isVisible.map((_, index) => checkVisibility(elementRefs.current[index]))
      );
    };
    window.addEventListener('scroll', checkAllVisibility);
    return () => {
      window.removeEventListener('scroll', checkAllVisibility);
    };
  }, [isVisible]);

  return (
    <div
      className={`homepage-${theme}`}
      id="homepage"
    >
      <Navbar />
      <HeroSection />
      <AD1 />
      <div
        className="content-homepage"
        id="content-homepage"
      >
        <div
          ref={elementRefs.current[0]}
          className={`visibility-reading ${isVisible[0] ? 'visible' : ''}`}
        >
          <RedirectReading />
        </div>
        <div
          ref={elementRefs.current[1]}
          className={`visibility-events ${isVisible[1] ? 'visible' : ''}`}
        >
          <RedirectEvents />
        </div>
        <div
          ref={elementRefs.current[2]}
          className={`visibility-about ${isVisible[2] ? 'visible' : ''}`}
        >
          <RedirectAbout />
        </div>
      </div>
      <AD2 />
      <Footer />
    </div>
  );
}

export default Homepage;
