import React, { Component } from 'react';
import '../src/CSS/style.css';
import InputSection from './components/InputSection';
import Cards from './components/Cards'; 
import Header from './components/Header'; 


class App extends Component {
  state = {
    cards:[]
  };s

  handleAddCard = (name, url, read) =>{
    // 1. Take a copy of existing state
    // const cards = [...this.state.cards]; 
    // 2. Add a new card to that cards variable
    this.state.cards.push({name, url, read})
    // 3. Set state to that new state
    this.setState({ 
      cards: this.state.cards
    });
  }

  handleDeleteCard = (index) => {
    this.state.cards.splice(index, 1) 
    this.setState({ cards: this.state.cards })
  }

  handleUpdateRead = () => {
    this.setState({
      read: !this.state.cards.read
    })
    console.log("Updated Read")
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
          handleUpdateRead={this.handleUpdateRead} 
          handleSubmit={this.handleDeleteCard}
          cards={this.state.cards} 
        />
      </div>
    );
  }
}

export default App;
