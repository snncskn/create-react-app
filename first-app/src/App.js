import React, { Component } from 'react';
import { FirstComponent } from './first';
/* imported that component to we have to use  */
import {Form} from './form';

class App extends Component {
  render() {

    /* list constant */
    const list = ["1", "2", "3"];

    return (
      <div>
        ilk kodlar
        <hr />
        <FirstComponent myList={list}></FirstComponent> 
      </div>
    );
  }
}

export default App;
