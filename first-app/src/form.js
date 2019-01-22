import React from 'react';

export class Form extends React.Component {

    sendClick(e) {
        e.preventDefault(); 
        console.log('I am here for sendButton')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sendClick}>
                    <input type="text" id="input" />
                </form>
                <button onClick={this.sendClick}> Send</button>
            </div>
        );
    }
}