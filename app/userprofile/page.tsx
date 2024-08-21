'use client';
import React, { use, useEffect, useState } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.config';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    uid: '',
  });

    
    const fetchUserData = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        // Referera till dokumentet med användarens uid
        const docRef = doc(db, 'users', user.uid );
        const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log('User data:', data);

            setUserData({
              name: data.name || 'No name provided',  // If "name" field does not exist, provide a fallback
              email: data.Email || 'No email provided', // Make sure to access the correct field
              uid: data.uid || user.uid, // Use the uid from the document, or fallback to the user's uid
            });
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        console.log('No user is signed in');
      }
    };

  useEffect(() => {
    fetchUserData();
  }
  , [ ]);

  return (
    <div className='size-24 text-white' style={{ fontSize: '50px' }}>
      <h1>User Profile</h1>
      <button onClick={fetchUserData}>Fetch user data</button>
      <h2 className='text-red-600'>Name: {userData.name}</h2>
      <h2>Email: {userData.email}</h2>
      <h2>UID: {userData.uid}</h2>
    </div>
  );
}

export default UserProfile
