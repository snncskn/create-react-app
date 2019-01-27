import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class SecondApp extends Component {

    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    /* forceUpdate method examples */
    forceUpdateHandler() {
        this.forceUpdate();
    }


    /* FindDomNode  method examples */
    findDomNodeHandler() {
        ReactDOM.findDOMNode(document.getElementById('myDiv')).style.color = "red";
    }

    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler}>Force Update</button>
                <h4> Random : {Math.random()} </h4>


                <button onClick={this.findDomNodeHandler} > FindDomNode </button>
                <div id="myDiv">Change</div>

            </div>
        )
    }
}

export default SecondApp;
