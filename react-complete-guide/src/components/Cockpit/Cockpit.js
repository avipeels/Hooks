import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';
const Cockpit = props => {
    useEffect(() => { // combines componentDidMount and componentDidUpdate
        console.log('[Cockpit.js] useEffect...');
        // Https requests...
        setTimeout(() => {
            console.log('Pushed data to the server');
        }, 1000);
        //clean up using useEffect
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);// if we want this log to print only on the first render - pass an empty array


    useEffect(() => {
        console.log('[Cockpit.js]  2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });
    const { displayPersons, clicked } = props;
    let buttonClass = [styles.Button];
    if (displayPersons) {
        buttonClass.push(styles.Red);
    }
    return (
        <div className={styles.Cockpit}>
            <button
                className={buttonClass.join(' ')}
                onClick={clicked}>Toggle Persons</button>
        </div>
    );
}
export default React.memo(Cockpit);