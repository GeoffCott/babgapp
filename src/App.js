import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body'
import CharacterIcon from './CharacterIcon';
const charList= [
  "name 1",
  "name 2",
  "name 3"
];
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header logo={logo}/> 
        <Body labelText="This is the label text"/>
        
        <CharacterIcon charText={charList[0]} />
        <CharacterIcon charText={charList[1]} />
        <CharacterIcon charText={charList[2]} />

      </div>
    );
  }
}

export default App;
