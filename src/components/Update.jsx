import { useState } from 'react';
import { Link } from 'react-router';

/** State Management:
 * State updates only during component re-rendering, not during event handling.
 * Use state updater function to ensure state updates are based on the latest state
 */

function Update() {
  const [person, setPerson] = useState({
    firstName: 'Ankit',
    lastName: 'Mittal',
    age: 25,
  });

  const [value, setValue] = useState('');

  const handleFirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setPerson((prev) => ({ ...prev, firstName: newFirstName }));
  };

  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setPerson((prev) => ({ ...prev, lastName: newLastName }));
  };

  const handleIncreaseAge = () => {
    setPerson((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  return (
    <>
      {/* Full Name updates automatically */}
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <p>{person.age}</p>

      <button onClick={handleIncreaseAge}>Increase Age</button>

      {/* First Name Input */}
      <input
        type="text"
        placeholder="First Name"
        value={person.firstName}
        onChange={handleFirstNameChange}
      />

      {/* Last Name Input */}
      <input
        type="text"
        placeholder="Last Name"
        value={person.lastName}
        onChange={handleLastNameChange}
      />

      {/* Existing Input */}
      <input
        type="text"
        placeholder="Existing Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <p>{value}</p>

      <div>
        <p>This is the Update Page</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </>
  );
}

export default Update;
