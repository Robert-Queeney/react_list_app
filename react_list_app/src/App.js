import React, { Component } from 'react';
import '../src/CSS/style.css';
import InputSection from './components/InputSection';
import Cards from './components/Cards'; 


class App extends Component {
  state = {
    cards:[]
  };s

  handleAddCard = (name, url) =>{
    // 1. Take a copy of existing state
    // const cards = [...this.state.cards]; 
    // 2. Add a new card to that cards variable
    this.state.cards.push({name, url})
    // 3. Set state to that new state
    this.setState({ 
      cards: this.state.cards
    });
  }

  handleDeleteCard = (key) => {
    const cards = {...this.state.cards}
    cards.splice(key) 
    this.setState({ cards })
    console.log(cards.index)
  }

  render() {
    return (
      <div className="App">
        <InputSection 
          handleAddCard={this.handleAddCard}
          />
        <Cards 
          cards={this.state.cards} 
          handleDeleteCard={this.handleDeleteCard}
        />
      </div>
    );
  }
}

export default App;
