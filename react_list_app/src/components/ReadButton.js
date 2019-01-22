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
// Should this be here?   it cannot read state of undefined "read" -- that state lives in input section.
    handleUpdateRead = () => {
        this.setState({
          read: !this.state.cards.read
        })
        console.log("Updated Read")
      }
    

    render(){
        return<button onClick={(event) => {this.changeTitle(); this.handleUpdateRead()  }}>{this.state.title}</button>;
    }
}

ReadButton.defaultProps = {
    initialText: 'Mark as Read', 
    changedText: 'Mark as Unread' 
}

export default ReadButton;