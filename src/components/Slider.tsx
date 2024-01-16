import { useState } from 'react';
import './styles/Slider.css';

function Slider({ components }: { components: Array<JSX.Element> }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(false);

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

  const Render = () => {
    if (components.length! > 0) {
      setSelected(true);
      return components[index];
    } else {
      setSelected(false);
      return <p>Select pages from the left</p>;
    }
  };

  return (
    <div
      className="slider-container"
      style={{ marginLeft: !selected ? '3vw' : '3vw' }}
    >
      <button
        className="left"
        onClick={goLeft}
        style={!selected ? { left: '-1vw' } : { left: '-1vw' }}
      >
        ◀
      </button>
      <Render />
      <button
        className="right"
        onClick={goRight}
        style={!selected ? { right: '6vw' } : { right: '-1vw' }}
      >
        ▶
      </button>
    </div>
  );
}

export default Slider;
