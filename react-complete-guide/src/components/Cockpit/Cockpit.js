import React from 'react';
import styles from './Cockpit.module.css';
const Cockpit = (props) => {
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
export default Cockpit;