import React, { Component } from 'react';
import Classes from './Person.css';

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
            <div className={Classes.Person} >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.hobby}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;