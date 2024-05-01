import React, { useState, useEffect } from 'react';
import List from './components/List';
import Fetch from './components/Fetch';

function App() {
  const [count, setCount] = useState(0);
  const bs = ['a', 'b', 'c', 'd', 'e', 'f'];

  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setTodo(data));
  }, []);
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <List bs={bs} />
      <Fetch todo={todo}/>
      <Fetch todo={todo}/>
    </>
  );
}

export default App;

