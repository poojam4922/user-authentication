import './App.css';
// App.js
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  console.log(token);
  const handleLogin = (authToken, id) => {
    setIsLoggedIn(true);
    setToken(authToken);
    setUserId(id);
    // Save token and id to local storage
    localStorage.setItem('token', authToken);
    localStorage.setItem('userId', id);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken('');
    setUserId('');
    // Clear token and id from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  // Check if user is already logged in
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    if (storedToken && storedUserId) {
      setIsLoggedIn(true);
      setToken(storedToken);
      setUserId(storedUserId);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Profile id={userId} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      {isLoggedIn && <button className='logout' onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default App;

