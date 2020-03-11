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
    ],
    displayPersons: false
  }
  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 29 },
  //       { name: 'Chandra Bhanu', age: 25 },
  //       { name: 'Manoj Peelukhana', age: 26 },
  //     ]
  //   })
  // }
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: this.state.persons[0].name, age: 29 },
        { name: event.target.value, age: 25 },
        { name: 'Manoj Peelukhana', age: 26 },
      ]
    })
  }

  toggleNameDisplayHandler = () => {
    this.setState({ displayPersons: !this.state.displayPersons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    const { displayPersons } = this.state;
    let persons = null;
    if (displayPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            click={this.switchNameHandler.bind(this, 'Avinash P')}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.changeNameHandler}>My hobbies: Gaming
            </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button
          style={style}
          // onClick={this.switchNameHandler.bind(this, 'Avinash Peelu')}>Switch Name
          onClick={this.toggleNameDisplayHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
