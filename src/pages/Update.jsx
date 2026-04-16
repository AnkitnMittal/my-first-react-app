import React, { useState } from 'react';

/** State Management:
 * State updates only during component re-rendering, not during event handling.
 * Use state updater function to ensure state updates are based on the latest state
 */

function Update() {
  const [person, setPerson] = useState({ name: 'Ankit', age: 25 });
  const [value, setValue] = useState('');

  const handleIncreaseAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  };

  return (
    <>
      <h1>{person.name}</h1>
      <p>{person.age}</p>
      <button onClick={handleIncreaseAge}>Increase Age</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <p>{value}</p>
    </>
  );
}

export default Update;
