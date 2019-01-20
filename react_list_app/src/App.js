import React, { Component } from 'react';
import '../src/CSS/style.css';
import InputSection from './components/InputSection';
import Cards from './components/Cards'; 
import Header from './components/Header'; 


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

  handleDeleteCard = (index) => {
    this.state.cards.splice(index, 1) 
    this.setState({ cards: this.state.cards })
  }

  render() {
    return (
      <div className="App">
        <div className="left-side">
          <Header />
          <InputSection 
            handleAddCard={this.handleAddCard}
            />
        </div>
        <Cards 
          handleSubmit={this.handleDeleteCard}
          cards={this.state.cards} 
        />
      </div>
    );
  }
}

export default App;
