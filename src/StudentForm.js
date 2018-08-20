import React from 'react';
import './StudentForm.css';

function StudentForm( props ){

    let watchForm = ( event ) => {
        event.preventDefault();
        
        let newStudent = {
            name : event.target.studentName.value,
            program : event.target.program.value,
            hobbies : [event.target.hobby.value]
        }
        
        props.addStudent( newStudent );
    }


    return (
        <form onSubmit={ (event) => watchForm(event) }>
            <label htmlFor="studentName" > Student Name : 
                <input type="text" id="studentName" name="studentName" />
            </label>
            <label htmlFor="program" > Program : 
                <input type="text" id="program" name="program" />
            </label>
            <label htmlFor="hobby" > Hobby : 
                <input type="text" id="hobby" name="hobby" />
            </label>
            <button type="submit">
                Add Student
            </button>
        </form>
    )
}

export default StudentForm;