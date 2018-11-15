import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Hamza', age: 24 },
      { name: 'Max', age: 28 },
      { name: 'Bruno', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandeler = (event) =>{
    this.setState({
      persons: [
        { name: 'Hamza', age: 24 },
        { name: event.target.value, age: 28 },
        { name: 'Bruno', age: 26 }
      ] 
    })
  }

  deletePerson = (personIndex) => {
      const persons = this.state.persons;
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

    let persons= null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePerson(index)} 
              name={person.name} 
              age={person.age}/>
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
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?' ))
  }
}

export default App;
