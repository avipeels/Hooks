import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'abc123', name: 'Avinash', age: 29 },
      { id: 'def234', name: 'Bhanu', age: 25 },
      { id: 'ghi345', name: 'Manoj', age: 26 },
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
  changeNameHandler = (event, id) => {
    const { persons } = this.state;
    //get the person
    const personIndex = persons.findIndex(p => {
      return p.id === id
    });
    console.log(personIndex);
    const person = { ...persons[personIndex] }; // make a copy of person Object because objects have reference to orginal value which changes the source object.
    console.log(person);
    //update the person name immutably
    person.name = event.target.value;
    const personsNew = [...persons]; // make a copy of persons Array because arrays have reference to orginal value which changes the source array.
    personsNew[personIndex] = person;
    console.log(personsNew);
    //update the state
    this.setState({ persons: personsNew });
  }

  toggleNameDisplayHandler = () => {
    this.setState({ displayPersons: !this.state.displayPersons });
  }

  deletePersonsHandler = (personId) => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons];
    newPersons.splice(personId, 1);
    this.setState({ persons: newPersons })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    const { displayPersons, persons } = this.state;
    let personsList = null;
    if (displayPersons) {
      personsList = (
        <div>
          {persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.changeNameHandler(event, person.id)}
            />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            click={this.switchNameHandler.bind(this, 'Avinash P')}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.changeNameHandler}>My hobbies: Gaming
            </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
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
        {personsList}
      </div>
    );
  }
}

export default App;
