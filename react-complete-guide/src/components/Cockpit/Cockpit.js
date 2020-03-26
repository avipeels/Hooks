import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);
    useEffect(() => { // combines componentDidMount and componentDidUpdate
        console.log('[Cockpit.js] useEffect...');
        toggleBtnRef.current.click();
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
                onClick={clicked}
                ref={toggleBtnRef}
            >Toggle Persons</button>
            {<button onClick={authContext.login}>Login</button>}

        </div>
    );
}
export default React.memo(Cockpit);