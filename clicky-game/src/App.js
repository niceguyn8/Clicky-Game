import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";

class App extends Component {

  state = {
  cards: [{
    "id": 1,
    "image": "/assets/images/nic1.jpg",
    "clicked": false
  },
  {
    "id": 2,
    "image": "/assets/images/nic2.jpeg",
    "clicked": false
  },
  {
    "id": 3,
    "image": "/assets/images/nic3.jpg",
    "clicked": false
  },
  {
    "id": 4,
    "image": "/assets/images/nic4.jpeg",
    "clicked": false
  },
  {
    "id": 5,
    "image": "/assets/images/nic5.jpeg",
    "clicked": false
  },
  {
    "id": 6,
    "image": "/assets/images/nic6.jpg",
    "clicked": false
  },
  {
    "id": 7,
    "image": "/assets/images/nic7.jpeg",
    "clicked": false
  },
  {
    "id": 8,
    "image": "/assets/images/nic8.jpg",
    "clicked": false
  },
  {
    "id": 9,
    "image": "/assets/images/nic9.jpg",
    "clicked": false
  },
  {
    "id": 10,
    "image": "/assets/images/nic10.jpg",
    "clicked": false
  },
  {
    "id": 11,
    "image": "/assets/images/nic11.jpg",
    "clicked": false
  },
  {
    "id": 12,
    "image": "/assets/images/nic12.jpg",
    "clicked": false
  }
],
  score: 0,
  topScore: 0
};

componentDidMount() {
  this.setState({ cards: this.shuffleCards(this.state.cards) });
}

handleCorrectGuess = newData => {
  const { topScore, score } = this.state;
  const newScore = score + 1;
  const newTopScore = newScore > topScore ? newScore : topScore;
  this.setState({
    cards: this.shuffleCards(newData),
    score: newScore,
    topScore: newTopScore
  });
};

handleIncorrectGuess = cards => {
  this.setState({
    cards: this.resetCards(cards),
    score: 0
  });
};

resetCards = cards => {
  const resetCards = cards.map(item => ({ ...item, clicked: false }));
  return this.shuffleCards(resetCards);
};

shuffleCards = cards => {
  let i = cards.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
    i--;
  }
  return cards;
};

handleItemClick = id => {
  let guessedCorrectly = false;
  const newData = this.state.cards.map(item => {
    const newItem = { ...item };
    if (newItem.id === id) {
      if (!newItem.clicked) {
        newItem.clicked = true;
        guessedCorrectly = true;
      }
    }
    return newItem;
  });
  guessedCorrectly
    ? this.handleCorrectGuess(newData)
    : this.handleIncorrectGuess(newData);
};

  render() {
    return (
      <div>

      <Header />
      <h3 className="scoreSummary">
                   Correct Guesses: {this.state.score}
                   <br />
                   Best Score: {this.state.topScore}
               </h3>

       <Wrapper>
         {this.state.cards.map(item => (
           <Card
             key={item.id}
             id={item.id}
             shake={!this.state.score && this.state.topScore}
             handleClick={this.handleItemClick}
             image={item.image}
           />
         ))}
       </Wrapper>
     </div>
   );
 }
}

export default App;
