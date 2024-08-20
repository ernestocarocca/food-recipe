'use client'
import { AuthContext } from '@/app/AuthContext';
import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';


const LogoutButton: React.FC = () => {
    const { signOut } = useContext(AuthContext)
    const handleLogout = () => {
    signOut();
    };

    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
};

export default LogoutButton;