//CALL MODULES AND METHODS
import React from 'react';

//CALL CSS CLASS, METHODS AND FUNCTIONS
import './App.css';

//IMPORTING COMPONENTS
import { Header } from './components/Header';
import { TinderCards } from './components/TinderCards';
import { SwipeButtons } from './components/SwipeButtons';

//FRONTEND
function App() {
  //RENDERING TO THE FRONTEND
  return (
    //BEM class naming convention
    <div>
      {/* HEADER*/}
      <Header />

      {/* TINDER CARDS */}
      <TinderCards />
      
      {/* SWIPE BUTTONS */}
      <SwipeButtons />
    </div>
  );
}

export default App;