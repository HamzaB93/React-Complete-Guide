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

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!');
    // DONT DO THIS: this.state.persons[0].name = "Hamza Bhatti"
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Max', age: 28 },
        { name: 'Bruno', age: 30 }
      ] 
    })
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
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>        
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Hamza!')}
            changed={this.nameChangedHandeler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'Batman')}/>
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
