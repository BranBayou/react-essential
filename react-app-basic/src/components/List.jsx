import React from 'react';

const List = ({ bs }) => {
  return (
    <ul>
      {bs.map(b => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

export default List;
