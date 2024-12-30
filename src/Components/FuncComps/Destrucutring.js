import React from 'react'


//   Way-1
//function Destrucutring1({name, desig}) {
//   return (
//     <div>
//       Deconstrucutring Functional -- Name- {name} And Designation - {desig}
//     </div>
//   )
// }


// way-2 
function Destrucutring1(props) {
const {name, desig}=props

return (
  <div>
    Deconstrucutring Functional -- Name- {name} And Designation - {desig}
  </div>
)
}

export default Destrucutring1