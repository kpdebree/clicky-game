import React, { Component } from 'react';
import GameImage from './components/GameImage/GameImage';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Clicky-Game</Title>
        {/* <Navbar /> */}
        <GameImage />
      </Wrapper>
    );
  }
}

export default App;
