import React from 'react';

const Person = (props) => {
    const { name, age, children } = props;
    return (
        <div>
            <p>I am a {name} and I am {age} years old</p>
            <p>{children}</p>
        </div>
    );
}

export default Person;