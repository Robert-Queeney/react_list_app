import React from 'react';
import Card from './Card';
import ReadButton from './ReadButton';


// class Cards extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { cards: this.props.cards }
//     }
    // Need to handle the delete here because we need to pass the function from App and this is the only card component being rendered directly
    // ASK TG about this
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.handleDeleteCard(e)
    // }

const Cards = ({ handleSubmit, cards, handleUpdateRead}) => {
   
        // swithced it to a stateful component to bring in functions
        // const Cards = ({ cards }) => {


        return (
            <div className="card-section">{cards.map((card, i) => (
                        <div className="card-wrapper" key={card.name} >
                            <Card  data={card} />
                            <div className="button-area">
                                {/* <button className="read-button" type="submit">Mark As Read</button> */}
                                <ReadButton onClick={(e) => handleUpdateRead(e)}  className="read-button" defaultText="Mark as Read" changedText="Mark as Unread" />
                                <button className="delete-button" type="submit" onClick={() => handleSubmit(i)}>Delete</button>
                            </div>
                        </div>

                ))}
            </div>
        )
    }


export default Cards; 