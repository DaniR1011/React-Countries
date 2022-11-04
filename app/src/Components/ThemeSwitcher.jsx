import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-button" type="button" onClick={toggleTheme}>
      {theme === 'dark' ? '🌞' : '🌚'}
    </button>
  );
};

export default ThemeSwitcher;