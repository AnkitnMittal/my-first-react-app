import React, { useState } from 'react';
import { Link } from 'react-router';

/*
The useState Hook provides those two things:
  A state variable to retain the data between renders.
  A state setter function to update the variable and trigger React to render the component again.
*/

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
    <>
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
      <div>
        <p>This is the State Page</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </>
  );
}

export default State;
