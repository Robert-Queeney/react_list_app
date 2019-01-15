import React from 'react';
import Card from './Card';


class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = { cards: this.props.cards }
    }

    render() {
        // swithced it to a stateful component to bring in functions
        // const Cards = ({ cards }) => {

        const { cards } = this.state;
        return (
            <div className="card-section">
                {cards.map(card => {
                    return <Card
                        data={card}
                    // <button className="read">Mark as Read</button>
                    />
                })}
            </div>
        )
    }
}

export default Cards; 