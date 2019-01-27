import React, { Component } from 'react';


/* forceUpdate method examples */
class Force extends Component {

    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler}>Force Update</button>
                <h4> Random : {Math.random()} </h4>
            </div>
        )
    }
}

export default Force;
