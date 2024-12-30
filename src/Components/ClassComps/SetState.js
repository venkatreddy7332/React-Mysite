import React, { Component } from 'react'

class setState extends Component {

    constructor(){
        super()
        this.state={
            count: 0
        }
    }

    increment(){
        this.setState(prevState=>({
            count: prevState.count+1
        }))
    }

    fiveTimeIncrement(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
      <div>
        Count : {this.state.count}
        <button onClick={()=> this.fiveTimeIncrement()}>Increment</button>
      </div>
    )
  }
}

export default setState
