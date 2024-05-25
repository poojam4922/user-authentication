// Profile.js
import React, { useState, useEffect } from 'react';

const Profile = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('An error occurred while fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div className='profile-container'>
      <h2>Profile</h2>
      {user && (
        <div className='profile-info'>
          <img src= {`${user.image}`} alt='profile'/>
          <p>Username: {user.username}</p>
          <p>Full Name: {user.firstName + " " + user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address.address + "," + user.address.city + "," + user.address.state}</p>
          <p>University: {user.university}</p>
          <p>Compamy: {user.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
