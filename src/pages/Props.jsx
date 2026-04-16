/*
    Defines a Button component that takes in props for text, color, and fontSize.
    Another pattern is to use prop destructuring to directly extract the props in the function parameters,

    function Button({ text = "Click Me!", color = "blue", fontSize = 12 })
*/

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px',
  };

  return (
    <button onClick={props.onClick} style={buttonStyle}>
      {props.text}
    </button>
  );
}

/*
Passing Component as a Prop:
    A Wrapper component that applies a light gray background to its children.
*/
function Wrapper({ children }) {
  const divStyle = {
    backgroundColor: 'lightgray',
    padding: '20px',
    margin: '10px',
  };
  return <div style={divStyle}>{children}</div>;
}

function Props() {
  const handleClick = () => {
    window.location.href = 'https://www.google.com';
  };

  const handleClickURL = (url) => {
    window.location.href = url;
  };

  return (
    <Wrapper>
      <Button
        text="Button 1"
        color="blue"
        fontSize="12"
        onClick={handleClick}
      />
      <Button
        text="Button 2"
        color="green"
        fontSize="12"
        onClick={() => handleClickURL('https://www.github.com')}
      />
    </Wrapper>
  );
}

export default Props;
