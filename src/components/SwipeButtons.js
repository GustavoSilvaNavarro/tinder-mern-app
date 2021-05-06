//CALL MODULES AND METHODS
import React from 'react';

//IMPORTING CSS CLASSES, METHODS AND FUNCTIONS
import './css/SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

//EXPORTING COMPONENT, FUNCTIONS, METHODS AND CLASSES
export const SwipeButtons = () => {
    //STATES
    //FUNCTIONS AND METHODS
    //RENDERING TO THE FRONTEND
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    );
};