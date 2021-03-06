import React, { PureComponent } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

// The context should be used for global settings, like if the user is authenticated or not.
// In other cases passing down props is prefered because that makes components looser coupled and less chained together.
export const AuthContext = React.createContext({
  isAuth: false,
  toggleAuth: () => { }
});

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] From inside the constructor!', props)
  }

  componentWillMount() {
    console.log('[App.js] From inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] From inside componentDidMount()')
  }

  // Not needed with a PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('SHOULD UPDATE [App.js]')
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons ||
  //     nextState.authenticated !== this.state.authenticated
  // }

  state = {
    persons: [
      { id: 1, name: 'Johan', age: 29, hobby: 'My hobby is coding' },
      { id: 2, name: 'Becca', age: 25, hobby: 'My hobby is working' }
    ],
    toggleClicked: 0,
    authenticated: false
  }

  toggleAuthHandler = () => {
    this.setState(prevState => {
      return {
        authenticated: !prevState.authenticated
      }
    });
  }

  nameChangedHandler = (event, id) => {
    if (!this.state.authenticated) {
      alert('You need to log in!');
      return;
    }

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
    // Set state with an arrow funktion if the new state depends on the old state and the state might be edited from another place aswell.
    // By using the arrow function with prevState your are safe!
    // Reason for this is that this.SetState runs async
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    if (!this.state.authenticated) {
      alert('You need to log in!');
      return;
    }

    // Using the spread syntax.
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] From inside render()')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <WithClass classes={Classes.App}>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          togglePersons={this.togglePersonsHandler}
          toggleClicked={this.state.toggleClicked}
          login={this.loginHandler} />
        <AuthContext.Provider value={{ isAuth: this.state.authenticated, toggleAuth: this.toggleAuthHandler }}>
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

export default App;
