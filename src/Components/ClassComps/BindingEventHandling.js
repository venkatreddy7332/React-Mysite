import React, { Component } from 'react'

class BindingEventHandling extends Component {

          //Method-1

//     constructor(){
//         super()
//         this.state={
//             message:"Hello World"
//         }
//     }
//     clickevent(){
//         this.setState({
//             message:"Good Bye!"
//         })
//     }
 
//   render() {
//     const {message}=this.state
//     return (
//       <div>
//         <h1>{message}</h1>
//         <button onClick={this.clickevent.bind(this)}> Click</button>
//       </div>
//     )
//   }

        //  Method- 2

    //     constructor(){
    //          super()
    //         this.state={
    //             message:"Hello World"
    //       }
    // }
    //     clickevent(){
    //         this.setState({
    //             message:"Good Bye!"
    //        })
    //     }
     
    //   render() {
    //     const {message}=this.state 
    //     return (
    //       <div>
    //          <h1>{message}</h1>
    //          <button onClick={() =>this.clickevent()}> Click</button>
    //       </div>
    // )
    //  }

            // Method-3    recomended approch 1

            // constructor(){
            //         super()
            //     this.state={
            //         message:"Hello World"
            //     }
            //     this.clickevent=this.clickevent.bind(this)
            // }
            // clickevent(){
            //     this.setState({
            //         message:"Good Bye!"
            //     })
            // }

            // render() {
            // const {message}=this.state 
            // return (
            //     <div>
            //         <h1>{message}</h1>
            //         <button onClick={() =>this.clickevent()}> Click</button>
            //     </div>
            // )
            // }


            //Method-4 recomended approch-2

            constructor(){
                super()
            this.state={
                message:"Hello World"
            }
            this.clickevent=this.clickevent.bind(this)
            }
            clickevent=()=>{
                this.setState({
                    message:"Good Bye!"
                })
            }

            render() {
            const {message}=this.state 
            return (
                <div>
                    <h1>{message}</h1>
                    <button onClick={() =>this.clickevent()}> Click</button>
                </div>
            )
            }

}

export default BindingEventHandling
