import React, { Component } from 'react';
import { Header } from './header';
import { Content } from './content';
import { Footer } from './footer';
import { Table } from './table';


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
      footer: "State Footer..."
    }
  }


  render() {
    return (
      <div>

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

      </div>
    );
  }
}


{/* Default Prop */ }
App.defaultProps = {
  defaultHeaderProp: "Default Header Prop..."
}

export default App;
