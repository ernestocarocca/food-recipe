"use client";



import React, { useContext } from 'react'
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.config';
import { SidebarDemo } from '@/components/example/sidebar-demo';




const UserDashboard = () => {



    return (
        <div className=' flex  w-full  h-full  overflow-hidden bg-inherit '>
            <div className=' '> 
                 
                <SidebarDemo /> 
                 </div>
                 </div>
    )
}

export default UserDashboard