import React, { Component } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps...');
    //     return state;
    // }
    shouldComponentUpdate(nextProps, nextState) {
        //this.props === nextProps
        console.log('[Persons.js] shouldComponentUpdate...');
        return nextProps.persons !== this.props.persons;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate...');
        return { message: 'Snapshot temporary' };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate...');
        // console.log(snapshot);
    }
    render() {
        console.log('[Persons.js] rendering...', this.props.isAuthenticated);
        return (
            <AuthContext.Consumer>
                {(context) => this.props.persons.map((person, index) => {
                    return <Person
                        key={person.id}
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.props.changed(event, person.id)}
                        isAuth={context.authenticated}
                    />
                })
                }
            </AuthContext.Consumer>
        )
    }
}
export default Persons;