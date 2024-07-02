import React from 'react';
import { useLocalForage } from '../hooks/useLocalForage';
import { User } from '../types/User';

const AdminHome: React.FC = () => {
  const [users] = useLocalForage<User[]>('users', []);

  return (
    <div className='conatiner'>
      <h2>All Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.uid}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminHome;
