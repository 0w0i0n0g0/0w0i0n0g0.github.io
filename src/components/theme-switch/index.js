import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { setValueToLocalStorage } from '../../utils/localStorage';
import './style.scss';

function ThemeSwitch(props) {
  const isDarkMode = props.isDarkMode;
  const setIsDarkMode = props.setIsDarkMode;
  const [svgColor, setSvgColor] = useState((isDarkMode ? '#ffcc33' : '#3366FF'));

  useEffect(() => {
    setValueToLocalStorage('isDarkMode', isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

    // change svg color
    setSvgColor(isDarkMode ? '#ffcc33' : '#3366FF');
  }, [isDarkMode]);

  return (
    <div className="dark-mode-button-wrapper">
      <IconButton className="dark-mode-button" onClick={() => setIsDarkMode((isDark) => !isDark)}>
        {isDarkMode ? (
          <LightModeIcon className="dark-mode-icon" fontSize="large" style={{fill: svgColor}} />
        ) : (
          <DarkModeIcon className="dark-mode-icon" fontSize="large" style={{fill: svgColor}} />
        )}
      </IconButton>
    </div>
  );
}

export default ThemeSwitch;
