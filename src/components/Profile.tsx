import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocalForage } from '../hooks/useLocalForage';
import { User } from '../types/User';

const Profile: React.FC = () => {
  const { uid } = useParams<{ uid: string }>();
  const [users] = useLocalForage<User[]>('users', []);
  const user = users.find(u => u.uid === uid);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='container'>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
