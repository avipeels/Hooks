import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = (props) => {


  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Avinash', age: 29 },
      { name: 'Bhanu', age: 25 },
      { name: 'Manoj', age: 26 },
    ],
  })
  const [otherState] = useState({
    otherState: 'some other value',
  });

  console.log(personsState,otherState);
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Avinash Peelukhana', age: 29 },
        { name: 'Chandra Bhanu', age: 25 },
        { name: 'Manoj Peelukhana', age: 26 },
      ],
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Gaming</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
