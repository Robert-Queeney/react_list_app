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
            {/* might have to get react router to make links work */}
            <div className="card-url" key={data.url}><a href={`https:{data.url}`} target="_blank" rel="noopener noreferrer">{data.url}</a></div>
        </div>
    )

}
// }
export default Card; 