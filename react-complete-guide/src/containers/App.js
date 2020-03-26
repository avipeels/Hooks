import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hocs/withClass';
import classes from './App.module.css';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'abc123', name: 'Avinash', age: 29 },
      { id: 'def234', name: 'Bhanu', age: 25 },
      { id: 'ghi345', name: 'Manoj', age: 26 },
    ],
    displayPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate...');
  }

  changeNameHandler = (event, id) => {
    const { persons } = this.state;
    //get the person
    const personIndex = persons.findIndex(p => {
      return p.id === id
    });
    const person = { ...persons[personIndex] }; // make a copy of person Object because objects have reference to orginal value which changes the source object.
    //update the person name immutably
    person.name = event.target.value;
    const personsNew = [...persons]; // make a copy of persons Array because arrays have reference to orginal value which changes the source array.
    personsNew[personIndex] = person;
    //update the state
    this.setState((prevState, props) => {
      return {
        persons: personsNew,
        changeCounter: prevState.changeCounter + 1,
      }
    });
  }

  toggleNameDisplayHandler = () => {
    this.setState({ displayPersons: !this.state.displayPersons });
  }

  deletePersonsHandler = (personId) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personId, 1);
    this.setState({ persons: newPersons })
  }
  loginHandler = () => {
    debugger;
    this.setState({ authenticated: true });
  }
  render() {
    console.log('[App.js] render');
    const { displayPersons, persons } = this.state;
    let personsList = null;
    let buttonClass = [styles.Button];
    if (displayPersons) {
      personsList =
        <Persons
          persons={persons}
          clicked={this.deletePersonsHandler}
          changed={this.changeNameHandler}
        />
      buttonClass.push(styles.Red)
    }
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>

        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >

          {this.state.showCockpit ? (
            <Cockpit
              displayPersons={displayPersons}
              persons={persons}
              clicked={this.toggleNameDisplayHandler}
            />) : null
          }

          {personsList}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default withClass(App, classes.App);
