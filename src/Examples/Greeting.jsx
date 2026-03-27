/*
  This is a simple React component that displays a greeting message
  Shows how JS can be mixed with HTML using JSX syntax
*/

const person = {
  name: 'Alice',
  theme: {
    backgroundColor: 'black',
    color: 'white',
  },
};

function Greeting() {
  return (
    <div style={person.theme}>
      <h1>Hello, {person.name}!</h1>
      <img
        className="avatar"
        src="https://imgs.search.brave.com/jd1Vu0uAzdC_hd12driyWDZupnt23ktkzQbaPeTmpi0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/MDI2ODU1OC9waG90/by9zdW1tZXItc2Vs/ZmllLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1JaXZHUUlY/VjdwQ3VfdHIxMEkw/a2FEb3VVdElpX3BL/ek9ycUJfTkFHb0NB/PQ"
        alt="Alice avatar"
      />
      <ul>
        <li>Likes: React, Vite, JavaScript</li>
        <li>Hobbies: Coding, Traveling, Cooking</li>
        <li>Favorite Color: Blue</li>
      </ul>
    </div>
  );
}

export default Greeting;
