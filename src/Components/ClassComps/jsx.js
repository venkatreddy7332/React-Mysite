import React from "react";

const jsx=()=>{
   // return (
   //     <h1>Hello World without jsx</h1>
   // )
    return (React.createElement('div',
        {id:'hello'},
        'Hello World from jsx'
    ))
}

export default jsx;
