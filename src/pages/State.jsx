/*
The useState Hook provides those two things:
  A state variable to retain the data between renders.
  A state setter function to update the variable and trigger React to render the component again.
*/

import React, { useState } from 'react';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function State() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount(count + 1);
  };

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    handleClickCount();
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}

      <p>Count: {count}</p>
    </div>
  );
}

export default State;
