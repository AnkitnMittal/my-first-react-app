import { Link, Outlet } from 'react-router';

function Basics() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">← Back to Home</Link>
        </li>
        <li>
          <Link to="greeting">Go to Greeting</Link>
        </li>
        <li>
          <Link to="props">Go to Props</Link>
        </li>
        <li>
          <Link to="render">Go to Render</Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Basics;
