import { useParams, Link } from 'react-router';

function Profile() {
  const name = useParams();

  return (
    <div>
      <p>Welcome, {name.name}!</p>
    </div>
  );
}

export default Profile;
