import React, { Component } from 'react';
import { Header } from './header';
import { Content } from './content';
import { Footer } from './footer';
import { Table } from './table';
import PropTypes from 'prop-types';


class App extends Component {

  constructor() {
    super();
 
    this.state = {
      persons: [
        { "id": 4 },
        { "id": 5 },
        { "id": 6 }
      ],
      header: "State Header...",
      footer: "State Footer...",
      stateDatas : []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  }

  setStateHandler() {
    var ret = document.getElementById('stateInput').value;
    var myArray = this.state.stateDatas.slice();
    myArray.push(ret);
    this.setState({ stateDatas: myArray });
  }

  render() {
    return (
      <div>

        {/* Set State Using...*/}
        <input type="text" id="stateInput" />
        <button onClick={this.setStateHandler}>Set State</button>
        <h4> State Array : {this.state.stateDatas} </h4>



        {/* State*/}
        <h1>{this.state.header}</h1>

        {/* Header Props*/}
        <h1>{this.props.headerProp}</h1>


        {/* App Header Props*/}
        <h1>{this.props.defaultHeaderProp}</h1>

        {/* Stateles Component  (no datas)*/}
        <Header />
        <Content />
        <Footer />

        { /* Stateful Component (With datas) */}
        <table>
          <tbody >

            {this.state.persons.map((person, index) =>
              <Table key={index} data={person} />)}

          </tbody>
        </table>

        {/* Default Prop */}
        <h3>{this.props.defaultArray}</h3>
        <h3>{this.props.defaultNum}</h3>
        <h3>{this.props.defaultBool}</h3>
        <h3>{this.props.defaultFonk('SNN')}</h3>
      </div>
    );
  }
}

/* Prop types */
App.ProtoTypes = {
  propTypesHeader: PropTypes.string,
  defaultArray: PropTypes.array,
  defaultBool: PropTypes.bool.isRequired,
  defaultNum: PropTypes.number,
  defaultFonk: PropTypes.func
}


/* Default Prop */
App.defaultProps = {
  defaultHeaderProp: "Default Header Prop...",
  defaultArray: [1, 2, 3],
  defaultBool: true,
  defaultNum: 100,
  defaultFonk: function (e) {
    return e;
  }
}

export default App;
