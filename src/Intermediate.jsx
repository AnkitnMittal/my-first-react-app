import { Link, Outlet } from 'react-router';

function Intermediate() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">← Back to Home</Link>
        </li>
        <li>
          <Link to="state">Go to State</Link>
        </li>
        <li>
          <Link to="update">Go to Update</Link>
        </li>
        <li>
          <Link to="side-effect">Go to Side Effect</Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Intermediate;
