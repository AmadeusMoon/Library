import { useState } from 'react';
import './styles/Slider.css';

function Slider({ components }: { components: Array<JSX.Element> }) {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    setIndex((oldIndex: number) => {
      if (oldIndex === 0) {
        return components.length - 1;
      } else {
        return oldIndex - 1;
      }
    });
  };

  const goRight = () => {
    setIndex((oldIndex: number) => (oldIndex + 1) % components.length);
  };

  return (
    <div className="slider-container">
      <button
        className="left"
        onClick={goLeft}
      >
        ◀
      </button>
      {components.length! > 0 ? (
        components[index]
      ) : (
        <p>Select pages from the left</p>
      )}
      <button
        className="right"
        onClick={goRight}
      >
        ▶
      </button>
    </div>
  );
}

export default Slider;
