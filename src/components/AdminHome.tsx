import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User } from '../types/User';

const AdminHome: React.FC = () => {
  const { state } = useAuth();

  return (
    <div className='container'>
      <h2>All Users</h2>
      <ul>
        {state.users.map(user => (
          <li key={user.uid}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminHome;
