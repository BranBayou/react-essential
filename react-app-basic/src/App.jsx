import React, { useState } from 'react';
import List from './components/List';

function App() {
  const [count, setCount] = useState(0);
  const bis = ['a', 'b', 'c', 'd', 'e', 'f'];

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
      <List bis={bis} />
    </>
  );
}

export default App;

