import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'abdfsfd', name: 'Hamza', age: 24 },
      { id: 'dfsdfdsf', name: 'Max', age: 28 },
      { id: 'ajghjhjgm', name: 'Bruno', age: 26 }
    ],
    showPersons: false,
    userInput: '',
    userInputLength: null
  }

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
    let persons = null;

    if(this.state.showPersons) {
      persons = 
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHanddler}
            changed={this.nameChangedHandeler}/>;
    }

    return (
        <div className={classes.App}> 
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>            

          {persons}
        </div>     
    );
  }
}
export default App;
