import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../src/components/Register';
import Login from '../src/components/Login';
import Profile from '../src/components/Profile';
import AdminHome from '../src/components/AdminHome';
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <div className='center'>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile/:uid" element={<Profile/>} />
          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
