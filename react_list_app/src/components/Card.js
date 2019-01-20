import React from 'react'; 

// class Card extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {data: this.props.data}
//     }


//     render(){
//         const { data } = this.state; 
const Card = ({ data }) => {
    return(
        <div className='card' >
            <h1 className="card-name" key={data.name}>{data.name}</h1>
            <div className="card-url" key={data.url}>{data.url}</div>
        </div>
    )

}
// }
export default Card; 