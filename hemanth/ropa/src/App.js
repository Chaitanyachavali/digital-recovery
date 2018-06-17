import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  state = {
    fields: {}
  };

  onSubmit = fields => {
    this.setState({ fields });
    console.log('Details :', fields)
  };

  render() {
    return (
      <div className="App">
        <header>
        BUNSEEE
        </header>
        <h1>
        HOW ARE YOUR BUNSSSSS
        </h1>

          <Form />
          
      </div>
    );
  }
}

export default App;
