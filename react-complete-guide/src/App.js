import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Avinash', age: 29 },
      { name: 'Bhanu', age: 25 },
      { name: 'Manoj', age: 26 },
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Chandra Bhanu', age: 25 },
        { name: 'Manoj Peelukhana', age: 26 },
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button
          onClick={this.switchNameHandler.bind(this, 'Avinash Peelu')}
        >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          click={this.switchNameHandler.bind(this, 'Avinash P')}
          name={this.state.persons[1].name} age={this.state.persons[1].age}
        >My hobbies: Gaming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
