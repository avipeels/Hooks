import React from 'react';

const Person = (props) => {
    const { name, age, children, click, changed } = props;
    return (
        <div>
            <p onClick={click}>I am a {name} and I am {age} years old</p>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name} />
        </div>
    );
}

export default Person;