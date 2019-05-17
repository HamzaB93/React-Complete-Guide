import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor ', props);
    this.state = {
      persons: [
        { id: '1', name: 'Hamza', age: 24 },
        { id: '2', name: 'Max', age: 28 },
        { id: '3', name: 'Bruno', age: 26 }
      ],
      showPersons: false,
      showCockpit: true,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount ');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     { id: 'abdfsfd', name: 'Hamza', age: 24 },
  //     { id: 'dfsdfdsf', name: 'Max', age: 28 },
  //     { id: 'ajghjhjgm', name: 'Bruno', age: 26 }
  //   ],
  //   showPersons: false
  // }

  nameChangedHandeler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value,
                    userInputLength: event.target.value.length});
  }

  render() {
    console.log('[App.js] render')
    let persons = null;

    if(this.state.showPersons) {
      persons =
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandeler}/>;
    }

    return (
      <Auxilliary>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
          {this.state.showCockpit ? 
            <Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}/> : null}

              {persons}
      </Auxilliary>
    );
  }
}
export default withClass(App, classes.App);
