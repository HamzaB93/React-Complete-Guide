import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

  deletePerson = (personIndex) => {
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

  deleteCharHanddler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    let persons = null;
    let btnClass = '';

    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char 
        character={char} 
        key={index}
        clicked={() => this.deleteCharHanddler(index)}/>;
    });


    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {        
          return <ErrorBoundary key={person.id}>              
              <Person
                click={() => this.deletePerson(index)} 
                name={person.name} 
                age={person.age}                
                changed={(event) => this.nameChangedHandeler(event, person.id)}/>
            </ErrorBoundary>
          })}
        </div> 
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push( classes.red ); // classes is ['red']
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push( classes.bold ); // classes is ['red', 'bold']
    }


    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App!</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>   
          {persons}

          
          <hr/>
          <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>
          <p>{this.state.userInput}</p>

          <Validation 
            textLength= {this.state.userInputLength}/>
          
          {charList}
        </div>     
    );
  }
}
export default App;
