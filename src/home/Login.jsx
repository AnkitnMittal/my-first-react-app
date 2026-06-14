import { useState } from 'react';
import { Link, Outlet } from 'react-router';

function Login() {
  const [name, setName] = useState('DEFAULT NAME');

  return (
    <>
      <div>
        <h1>Login Page</h1>
        <p>Please log in to view your profile.</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Link to={name}>Go to Profile</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Login;
