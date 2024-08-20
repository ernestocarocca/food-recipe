'use client';
import { AuthContext } from '@/app/AuthContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';


const logoutButton = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { signOut } = useContext(AuthContext);
    useEffect(() => {

        
    }, [router]);

    return (
        <div>
          
            <button onClick={signOut}>Logout</button>
        </div>
    );
};

export default logoutButton;
