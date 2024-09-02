"use client";

import { AuthContext } from '@/app/AuthContext';
import React, { useContext, useEffect, useState } from 'react';

const OverlayButton = () => {


    const [showOverlay, setShowOverlay] = useState(false);
    const { signOut } = useContext(AuthContext);
    useEffect(() => {


    }, [signOut]);

    const handleLogout = () => {
        signOut();
    }
    const handleButtonClick = () => {
        setShowOverlay(true);
    };

    const handleOverlayClose = () => {
        setShowOverlay(false);
    };

    return (
        <>
            <button className='bg-green-300 rounded-full z-50 fixed top-0 right-1 ' onClick={handleButtonClick}>Open Overlay</button>
            {showOverlay && (
                <div className=" z-50 fixed top-0 right-1 rounded-full bg-green-400 w-[100px]">
                    <div className=" bg-red-500 w-[100px] text-white">
                   <button onClick={ handleLogout}>
                          <h1>Logout</h1>
                   </button>
                        <button onClick={handleOverlayClose}>Close Overlay</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default OverlayButton;