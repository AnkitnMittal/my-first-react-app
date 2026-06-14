import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

function SideEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <>
      <p>{counter} seconds have passed.</p>
      <div>
        <p>This is the SideEffect Page</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </>
  );
}

export default SideEffect;
