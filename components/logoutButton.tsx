'use client';
import { AuthContext } from '@/app/AuthContext';
import { useContext } from 'react';


const logoutButton = ({ children }: { children: React.ReactNode }) => {
    const { signOut } = useContext(AuthContext);

    return (
        <div>
          
            <button onClick={signOut}>Logout</button>
        </div>
    );
};

export default logoutButton;
