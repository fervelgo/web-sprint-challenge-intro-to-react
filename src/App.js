import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
 
 const [characters, setCharacters] = useState([])
 const [currentCharacterName, setCurrentCharacterName] = useState(null) 

 const openInfo = name => {
   setCurrentCharacterName(name)
 }

 const closeInfo = name => {
   setCurrentCharacterName(null)
 }

useEffect(()=> {
  axios
  .get(`https://swapi.dev/api/films`)
  .then((res) => {
    setCharacters(res.results)
    console.log(res.results)
  })
  .catch(err => {
    console.log(err)  
  })
},[])
   // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        {
          characters.map(()=>{
            return (Character key={} action={openInfo})
          })
        }
    </div>
  );
}

export default App;
