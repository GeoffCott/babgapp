import React, { Component } from 'react';
import logo from './components/babg_header-576x180.png';
import './App.css';
import Body from './components/Body';
import CharacterIcon from './components/CharacterIcon';
import Footer from './components/Footer';
import Header from './components/Header';

const charList= ["Ralvio","Grusk","Lia Faen"];

const charRace=["Human","Orc","Dwarf"];

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Body labelText={"Choose Your Adventurer:"} />
        <CharacterIcon charText={charList[0]+": "+charRace[0]} />
        <CharacterIcon charText={charList[1]+": "+charRace[1]} />
        <CharacterIcon charText={charList[2]+": "+charRace[2]} />
        <Footer />

      </div>
    );
  }
}

export default App;
