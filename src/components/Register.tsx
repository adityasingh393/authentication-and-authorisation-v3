import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useLocalForage } from '../hooks/useLocalForage';
import { User } from '../types/User';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const navigate = useNavigate();
  const [users, setUsers] = useLocalForage<User[]>('users', []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { uid: uuidv4(), name, email, password, role };
    const updatedUsers = [...users, newUser];
    await setUsers(updatedUsers);
    console.log('Registered user:', newUser);
    console.log('All users:', updatedUsers);
    navigate('/login');
  };

  return (
    <div className='container'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value as 'user' | 'admin')}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
