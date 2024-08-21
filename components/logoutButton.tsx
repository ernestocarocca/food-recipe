'use client';
import { AuthContext } from '@/app/AuthContext';

import { useContext, useEffect } from 'react';


const LogOutButton = () => {

    const { signOut } = useContext(AuthContext);
    useEffect(() => {

        
    }, []);

    return (
        <div>
          
            <button onClick={signOut}>Logout</button>
        </div>
    );
};

export default LogOutButton;
