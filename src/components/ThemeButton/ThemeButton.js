import React, { useState } from 'react';
import moon from './moon.png';
import sun from './sun.png';

const ThemeButton = () => {
  const [theme, setTheme] = useState('light');
  const [icon, setIcon] = useState(moon);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setIcon(sun);
    } else {
      setTheme('light');
      setIcon(moon);
    }
  };

  return (
    <div>
      <button type="button" onClick={toggleTheme} className="theme_button">
        <img src={icon} alt="logo" className="moon" />
      </button>
    </div>
  );
};

export default ThemeButton;
