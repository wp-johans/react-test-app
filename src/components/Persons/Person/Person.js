import React, { Component } from 'react';
import Classes from './Person.css';
import PropTypes from 'prop-types';
import withClass2 from '../../../hoc/withClass2';

class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] From inside the constructor!', props)

        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] From inside componentWillMount()')
    }

    componentDidMount() {
        console.log('[Person.js] From inside componentDidMount()')
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        console.log('[Person.js] From inside render()')
        return (
            <>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.hobby}</p>
                <input
                    ref={this.inputElement}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name} />
            </>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    hobby: PropTypes.string,
    changed: PropTypes.func
}

export default withClass2(Person, Classes.Person);