import React from 'react';
import Card from './Card';


class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cards: this.props.cards }
    }
// Need to handle the delete here because we need to pass the function from App and this is the only card component being rendered directly
// ASK TG about this
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleDeleteCard(e)
    }


    render() {
        // swithced it to a stateful component to bring in functions
        // const Cards = ({ cards }) => {

        const { cards } = this.state;
        return (
            <div className="card-section">
                {cards.map(card => {
                    return( 
                        <div className="card-wrapper" >
                        <Card  key={card.id} data={card}/>
                        <button className="deleteButton" type="submit" onClick={this.handleSubmit}>Delete</button>
                        </div>
                        )})}
            </div>
        )
    }
}

export default Cards; 