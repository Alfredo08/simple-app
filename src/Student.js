import React from 'react';
import Hobby from './Hobby';
export default function Student( props ){

    return (
        <div>
          <h2> {props.student.name} </h2>
          <p> Index is : {props.num}</p>
          <div>
              {props.student.hobbies.map( (hobby, key) => {
                  return ( <Hobby hobby={hobby} />)
              })}
          </div>
        </div>
    );
}