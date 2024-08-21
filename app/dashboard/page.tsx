"use client";


import { ChartResult } from '@/components/chartsResult';
import SidebarDemo from '@/components/example/sidebar-demo';
import ResultMonth from '@/components/resultBox/resultMonth';
import React from 'react'
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.config';


const UserDashboard = () => {

    const createUserData = async () => {
        const user = auth.currentUser;

        if (user) {
            try {
                const userData = {
                    Email: user.email, // Användarens e-post från Firebase Auth
                    uid: user.uid, // Spara även användarens uid för referens
                };

                // Använd user.uid som dokumentets ID i Firestore
                await setDoc(doc(db, 'users', user.uid), userData);
                console.log('User data saved successfully!');
            } catch (error) {
                console.error("Error creating user data: ", error);
            }
        } else {
            console.log('No user is signed in');
        }
    };

    return (
        <div className=' flex flex-row'>
            <div className=''>  <SidebarDemo /></div>
            <div className=' overflow-hidden h-screen '>   <ResultMonth />


            </div>
            <ChartResult />
            <button onClick={createUserData}> Save to Collection</button>


        </div>
    )
}

export default UserDashboard