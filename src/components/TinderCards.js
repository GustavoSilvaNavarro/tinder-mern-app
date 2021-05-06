//CALL MODULES AND METHODS
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import axios from '../helpers/axios';

//IMPORTING CSS CLASSES, METHODS AND FUNCTIONS
import './css/TinderCards.css';

//EXPORTING FUNCTIONS, METHODS AND CLASSES
export const TinderCards = () => {
    //STATES
    const [people, setPeople] = useState([]); //states for the people in the tinder app
    //const [lastDirection, setLastDirection] = useState(); //save the direction when i swipe

    //USE EFFECT LOCAL STORAGE
    //Show data when i load or refresh page
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('tinder/cards');
            setPeople(req.data); //getting data from axios req
        };
        fetchData(); //ejecuto la funcion
    }, []); //los corchetes vacios significan que solo corre este codigo una vez y corre cada vez que actualizo

    //FUNCTIONS AND METHODS
    //Save the direction when i swipe
    const swiped = (direction, nameToDelete) => {
        console.log(`Removing: ${nameToDelete}`);
        //setLastDirection(direction);
    };

    //Get the name of the person that just left the card when i swipe
    const outofFrame = (name) => {
        console.log(`${name} left the screen!!!!`);
    };

    //RENDERING TO THE FRONTEND
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outofFrame(person.name)}>
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};