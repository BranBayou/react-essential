import React from 'react';

const List = (props) => {
  return (
      <ul>
        {props.bis.map(b => (
          <li key={b}>{b}</li>
        ))}
      </ul>
  );
}

export default List;
