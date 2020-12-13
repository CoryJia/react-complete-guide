import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = ({
        persons: [
            {name: "Max", age: 28},
            {name: "Manu", age: 27},
            {name: "Stephanie", age: 25}
        ],
        otherState: 'some other value',
        showPersons: false
    });

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 27},
                {name: "Stephanie", age: 27}
            ]
        });
    };

    switchNameHandler = (newName) => {
        //console.log("Was Clicked!");
        // Don't DO THIS: this.state.person[0].name ="Maximum";
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Manu", age: 27},
                {name: "Stephanie", age: 27}
            ],
            otherState: this.state.otherState
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {
                    this.state.showPersons === true ?
                        <div>
                            <Person
                                name={this.state.persons[0].name}
                                age={this.state.persons[0].age}/>
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={this.switchNameHandler.bind(this, 'Jack')}
                                changed={this.nameChangedHandler}
                            >My Hobbies: Hiking!</Person>
                            <Person
                                name={this.state.persons[2].name}
                                age={this.state.persons[2].age}/>
                        </div> : null
                }
            </div>
        );
    }
}

export default App;
