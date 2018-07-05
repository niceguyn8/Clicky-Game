import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>Nic Cage Clicky Game</Header>

        <h3 className="score">

          Correct Guesses:

        </h3>

      </Wrapper>
    );
  }
}

export default App;
