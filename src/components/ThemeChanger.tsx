import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/state';
import { themeChange } from '../state/reducers/theme';
import './styles/ThemeChanger.css';

function ThemeChanger() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const themeUpdate = theme === 'DarkTheme' ? '🌞' : '🌑';
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(themeChange());
  };
  return (
    <button
      className={`ThemeChanger-` + theme}
      id="themeChanger"
      onClick={onClick}
    >
      {themeUpdate}
    </button>
  );
}

export default ThemeChanger;
