import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalForage } from '../hooks/useLocalForage';
import { User } from '../types/User';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [users] = useLocalForage<User[]>('users', []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    console.log('Attempting login with email:', email, 'and password:', password);
    console.log('All users:', users);
    if (user) {
      console.log('Logged in user:', user);
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate(`/profile/${user.uid}`);
      }
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
