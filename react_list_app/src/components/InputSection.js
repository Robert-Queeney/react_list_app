import React, { Component } from 'react';

class InputSection extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            url: '',
            read: false,
        }
    }  
    
    handleChange = (key, value) => {
        this.setState({ 
            [key]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddCard(this.state.name, this.state.url, this.state.read)
        this.setState({
            name: '', 
            url: '',
            read: ''
        })
    }


    render(){
        // console.log(this.props.handleAddCard);
        return (
            <div className = "input-form">
                <div className = "input-area" >
                    <input onChange={(e) => {this.handleChange('name', e.target.value)}} value={this.state.name} type="text" placeholder="Website Name" />
                    <input onChange={(e) => {this.handleChange('url', e.target.value)}} value={this.state.url} type="text" placeholder="Website URL" />
                    <button className="input-button" type="submit" onClick={e => this.handleSubmit(e)}>Add Website</button>
                </div>
            </div>
        )    
    }
}

export default InputSection; 