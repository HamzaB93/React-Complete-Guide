import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = ( props ) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // Fake http request
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
    
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    });


    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
      assignedClasses.push( classes.red ); // classes is ['red']
    }
    if(props.persons.length <= 1){
      assignedClasses.push( classes.bold ); // classes is ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;