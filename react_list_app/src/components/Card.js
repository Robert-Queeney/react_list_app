import React from 'react'; 

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {data: this.props.data}
    }

    render(){
        const { data } = this.state; 
// const Card = ({ data }) => {
    return(
        <div className='card'>
            {data.name},
            {data.url}, 
            <button className="readButton">Mark as Read</button>, 
            <button className="deleteButton">Delete</button>
        </div>
    )

}
}
export default Card; 