import React, { useState } from 'react';

function Fetch(props) {
  

  return (
    <div>
      <p>Fetch API</p>
      {props.todo && (
        <div>
          <h2>Title: {props.todo.title}</h2>
          <p>User ID: {props.todo.userId}</p>
          <p>Completed: {props.todo.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default Fetch;
