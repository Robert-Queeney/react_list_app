import React from 'react'; 

class ReadButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: this.props.initialText
        }
        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle(){
        if(this.state.title === "Mark as Read"){
        this.setState({ title: this.props.changedText });
        } else {
            this.setState({ title: this.props.initialText })
        }
    }

    render(){
        return<button onClick={this.changeTitle}>{this.state.title}</button>;
    }
}

ReadButton.defaultProps = {
    initialText: 'Mark as Read', 
    changedText: 'Mark as Unread' 
}

export default ReadButton;