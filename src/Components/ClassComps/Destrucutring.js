import React, { Component } from 'react'

class Destrucutring extends Component {
  render() {
    const {name, desig}=this.props
    return (
      <div>
        Destrucutring  : Name - {name}  Designation - {desig}
      </div>
    )
  }
}

export default Destrucutring
