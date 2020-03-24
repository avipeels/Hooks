import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.module.css';
import withClass from '../../../hocs/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] rendering...');
        const { name, age, children, click, changed } = this.props;
        return (
            <Fragment>
                <p onClick={click}>I am a {name} and I am {age} years old</p>
                <p>{children}</p>
                <input
                    type="text"
                    onChange={changed}
                    value={name}
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                />
            </Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}
export default withClass(Person, classes.Person);