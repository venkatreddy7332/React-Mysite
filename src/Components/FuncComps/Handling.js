import React from 'react'

 function Handling() {

  function  clickHandler(){
        console.log("Clicked Func")
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
export default Handling