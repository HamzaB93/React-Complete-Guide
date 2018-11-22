import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'abdfsfd', name: 'Hamza', age: 24 },
      { id: 'dfsdfdsf', name: 'Max', age: 28 },
      { id: 'ajghjhjgm', name: 'Bruno', age: 26 }
    ],
    showPersons: false
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

  deletePerson = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {        
            return <Person
              click={() => this.deletePerson(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandeler(event, person.id)}/>
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>   
        {persons}       
      </div>      
    );
  }
}
export default App;
