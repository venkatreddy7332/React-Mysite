import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Handling extends Component {

    clickEvent(){
        console.log("Clicked Class")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Click Me</button>
      </div>
    )
  }
}

export default Handling
