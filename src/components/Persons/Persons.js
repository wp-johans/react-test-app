import React, { PureComponent } from 'react';
import Person from './Person/Person';

// PureComponent automaticly checks if nextProps and nextState has changed compared to the current in componentShouldUpdate().
// Can increase performance through avoiding updates that is not needed...
// ...but can also hurt performenace if implemented to hught up in the application tree because the whole application state and props is compared.
class Persons extends PureComponent {
    constructor(props) {
        super(props)
        console.log('[Persons.js] From inside the constructor!', props)
      }
    
      componentWillMount() {
        console.log('[Persons.js] From inside componentWillMount()')
      }
    
      componentDidMount() {
        console.log('[Persons.js] From inside componentDidMount()')
      }

      componentWillUpdate(nextProps) {
          console.log('[UPDATE Persons.js] From inside componentWillUpdate', nextProps)
      }
      
      // Dont call shouldComponentUpdate() when using a PureComponent
    //   shouldComponentUpdate(nextProps, nextState) {
    //       console.log('[SHOULD UPDATE', nextProps, nextState)
    //       return true;
    //   }
      
    render() {
        console.log('[Persons.js] From inside render()')
        return this.props.persons.map((p, index) =>
            <Person
                key={p.id}
                click={this.props.clicked.bind(this, index)}
                changed={(event) => this.props.changed(event, p.id)}
                name={p.name}
                age={p.age}
                hobby={p.hobby}
                position={index} />
        )
    }
}

export default Persons;