/*  Array.map() method to reduce code redundancy  */

function Render() {
  const animals = ['Lion', 'Cow', 'Dog', 'Cat'];

  return (
    <>
      <h1>Render</h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </>
  );
}

export default Render;
