import React from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        width:450px;
    }
`;
const Person = (props) => {
    const { name, age, children, click, changed } = props;
    return (
        <StyledDiv>
            <p onClick={click}>I am a {name} and I am {age} years old</p>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name} />
        </StyledDiv>
    );
}

export default Person;