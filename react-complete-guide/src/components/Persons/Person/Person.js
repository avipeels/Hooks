import React, { Component } from 'react';
import styles from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        const { name, age, children, click, changed } = this.props;
        return (
            <div className={styles.Person}>
                <p onClick={click}>I am a {name} and I am {age} years old</p>
                <p>{children}</p>
                <input type="text" onChange={changed} value={name} />
            </div>
        );
    }
}

export default Person;