import React, { Component } from 'react';
import logo from './babg_header-576x180.png';
import './App.css';
import Header from './Header';
import Body from './Body'
import CharacterIcon from './CharacterIcon';

const charList= [
  "Ralvio",
  "Grusk",
  "Lia Faen"
];
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header logo={logo}/> 
        <Body labelText={"Choose Your Adventurer:"}/>
        
        <CharacterIcon charText={charList[0]} />
        <CharacterIcon charText={charList[1]} />
        <CharacterIcon charText={charList[2]} />

      </div>
    );
  }
}

export default App;
