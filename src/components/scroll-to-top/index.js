import React, { useEffect, useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Zoom from '@mui/material/Zoom';
import './style.scss';

function ScrollToTop(props) {
  const isDarkMode = props.isDarkMode;
  const [svgColor, setSvgColor] = useState((isDarkMode ? '#ffffff' : '#232326'));

  useEffect(() => {
    setSvgColor(isDarkMode ? '#ffffff' : '#232326');
  }, [isDarkMode]);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  };

  return (
    <Zoom className="scroll-to-top-button-wrapper" in={trigger}>
      <div className="scroll-to-top-button" onClick={handleClick} role="presentation">
        <Fab className="scroll-to-top-button">
          <ArrowUpwardIcon className="scroll-to-top-icon" fontSize="large" style={{fill: svgColor}} />
        </Fab>
      </div>
    </Zoom>
  );
}

export default ScrollToTop;
