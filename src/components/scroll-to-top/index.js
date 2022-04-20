import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Zoom from "@mui/material/Zoom";
import './style.scss';

function ScrollToTop() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        );
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <Zoom className="scroll-to-top-button-wrapper" in={trigger}>
        <div className="scroll-to-top-button" onClick={handleClick} role="presentation">
            <Fab className="scroll-to-top-button">
            <ArrowUpwardIcon className="scroll-to-top-icon" fontSize="large" />
            </Fab>
        </div>
        </Zoom>
    );
}

export default ScrollToTop;
