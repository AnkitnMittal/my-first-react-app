import { useState } from 'react';
import { Link } from 'react-router';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <ul>
        <li>
          <Link to="login">Go to Profile</Link>
        </li>
        <li>
          <Link to="basics">Go to Basics</Link>
        </li>
        <li>
          <Link to="intermediate">Go to Intermediate</Link>
        </li>
        <li>
          <Link to="advanced">Go to Advanced</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
