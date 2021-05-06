//CALL MODULES AND METHODS
import React from 'react';

//IMPORTING CSS CLASSES, METHOD AND FUNCTIONS
import './css/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'; //CON ESTO PUEDO CONVERTIR CADA ICONO EN UN BOTON DE MANERA AUTOMATICA SOLO CON LLAMARLO
import ForumIcon from '@material-ui/icons/Forum';

//EXPORTING FUNCTIONS, METHODS AND CLASSES
export const Header = () => {
    //STATES
    //FUNCTIONS AND METHODS
    //RENDERING TO THE FRONTEND
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="Tinder App"/>
            
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    );
};