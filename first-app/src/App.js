import React, { Component } from 'react';
import { FirstComponent } from './first';
/* imported that component to we have to use  */
import { Form } from './form';

class App extends Component {

  constructor() {
    super();
    this.state = { list: ["A", "2", "3"] };
    this.addList = this.addList.bind(this);
  }

  addList(val) {
    let anyList = this.state.list;
    anyList.push(val);
    this.setState({ list: anyList });
  }

  render() {
    return ( 
      <div>
        ilk kodlar
        <hr />
        <FirstComponent myList={this.state.list}></FirstComponent>
        <hr />
        <Form newList={this.addList} />
      </div>
    );
  }
}

export default App;
