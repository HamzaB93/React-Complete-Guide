import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

// react-vis
const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor ', props);
    this.state = {
      persons: [
        { id: 'abdfsfd', name: 'Hamza', age: 24 },
        { id: 'dfsdfdsf', name: 'Max', age: 28 },
        { id: 'ajghjhjgm', name: 'Bruno', age: 26 }
      ],
      showPersons: false,

      // for react-vis
      results: []
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');

    fetch(API_URL)
    .then(response => {
        if (response.ok) {
            return  response.json()
        }
        else {
            throw new Error ('something went wrong')
        }
    })
    .then(response => this.setState({
        results: response.results.filter((r)=>{
                return r.name === 'JavaScript';
            })
        })
    )
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
    console.log('[App.js] Inside render()')
    let persons = null;

    if(this.state.showPersons) {
      persons = 
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandeler}/>;
    }

    return (
        <div className={classes.App}> 
          <Cockpit
            appTitle={this.props.title} 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>            

          {persons}
        </div>     
    );
  }
}
export default App;
