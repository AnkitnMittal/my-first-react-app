import { Fragment } from 'react';

const persons = [
  { id: crypto.randomUUID(), name: 'John', age: 30 },
  { id: crypto.randomUUID(), name: 'Jane', age: 25 },
  { id: crypto.randomUUID(), name: 'Bob', age: 35 },
];

/*
Place `key` on the top-level element returned by `.map()`
  Assigned to a 'Child Component' / <div> or use,
  <Fragment key={...}> if no wrapper element
*/

function ListItem({ person }) {
  return (
    <li>
      {person.name} - {person.age}
    </li>
  );
}

/*  Conditionally render UI based on the length of the `persons` array.  */
function List() {
  if (!persons.length) {
    return <div>There are no people to display.</div>;
  }

  return (
    <ul>
      {persons.map((person) => (
        <ListItem key={person.id} person={person} />
      ))}
    </ul>
  );
}

function Render() {
  return (
    <>
      <h1>Render</h1>
      <List />
    </>
  );
}

export default Render;
