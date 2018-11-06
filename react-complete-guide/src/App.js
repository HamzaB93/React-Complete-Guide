import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Hamza', age: 24 },
      { name: 'Max', age: 28 },
      { name: 'Bruno', age: 26 }
    ],
    otherState: 'Some other value'
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler('Hamza!!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>        
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Hamza!')}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Batman')}/>
        <hr/>
        <p>{this.state.otherState}</p>

      </div>      
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?' ))
  }
}

export default App;
