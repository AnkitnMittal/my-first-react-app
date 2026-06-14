import { Link, Outlet } from 'react-router';

function Advanced() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">← Back to Home</Link>
        </li>
        <li>
          <Link to="class">Go to Class</Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Advanced;
