import { render } from "@testing-library/react";
import React, { Component } from "react";

class Class1 extends Component{

    render(){
        return (
        <h1>hello {this.props.name}</h1>
    );
    };
}
export default Class1;