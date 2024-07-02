import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import AdminHome from './components/AdminHome';
import './App.css';
const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:uid" element={<Profile />} />
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
