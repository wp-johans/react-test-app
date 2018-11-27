import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Johan', age: 29, hobby: 'My hobby is coding' },
      { id: 2, name: 'Becca', age: 25, hobby: 'My hobby is working' }
    ]
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>
      p.id === id
    );

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();

    // Using the spread syntax.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;

    let buttonClass = Classes.teal;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) =>
            <Person
              key={p.id}
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangedHandler(event, p.id)}
              name={p.name}
              age={p.age}
              hobby={p.hobby} />
          )}
        </div>
      );

      buttonClass = Classes.purple;
    }

    return (
        <div className={Classes.App}>
          <h1>Hi, i'm Johan's first react app!</h1>
          <button className={buttonClass}
            onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
