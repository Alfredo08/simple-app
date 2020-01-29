import React from 'react';
import './App.css';
import Student from './Student';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      students : [{
        name : "Wentian",
        program : "Flex",
        hobbies : ['Program', 'Finance']
      },
      {
        name : "Alfredo",
        program : "EI",
        hobbies : ['Program', 'Teach', 'Piano']
      },
      {
        name : "Michael",
        program : "Flex",
        hobbies : ['Sports', 'Sing']
      },
      {
        name : "Julie",
        program : "EI",
        hobbies : ['Program', 'Sports']
      }]
    }
  }

  render(){
    return (
      <div className="App">
        This is the list of students

        {this.state.students.map( (student, index) => {
          return ( <Student student={student} num={index} /> )
        })}
        
      </div>
    );
  }
}

export default App;
