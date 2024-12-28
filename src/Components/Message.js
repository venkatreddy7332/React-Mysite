import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:"Hello world from Message1"
        }
    }
    changeContent(){
        this.setState({
            message:"Changed Content 11"
        })
    }

    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeContent()}>Change</button>
        </div>
        );
    }

}
export default Message