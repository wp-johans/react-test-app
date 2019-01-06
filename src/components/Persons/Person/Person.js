import React, { Component } from 'react';
import Classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] From inside the constructor!', props)
      }
    
      componentWillMount() {
        console.log('[Person.js] From inside componentWillMount()')
      }
    
      componentDidMount() {
        console.log('[Person.js] From inside componentDidMount()')
      }

    render() {
        console.log('[Person.js] From inside render()')
        return (
            <WithClass classes={Classes.Person} >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.hobby}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
            </WithClass>
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

export default Person;