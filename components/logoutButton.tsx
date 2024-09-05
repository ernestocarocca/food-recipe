"use client";

import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";


import { AuthContext } from '@/app/AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import { User } from "@nextui-org/user";

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
            <div className="  ">
                <Popover className=" bg-transparent fixed " placement="bottom" showArrow={false}>
                    <PopoverTrigger className="bg-black pl-2 pr-4 pt-2 m-1 rounded-md   ">
                            <div className=" fixed z-50 text-white">
                                <User
                                    name="Ernesto Carocca"
                                    className=" "

                                    avatarProps={{
                                        src: "/images/IMG_4628.jpg",
                                        children: <Button onClick={handleButtonClick}>Open</Button>,
                                    }}
                                />
                            </div>
                    </PopoverTrigger>
                        <PopoverContent className="relative px-2 m-4 border  bg-transparent ">
                            <div className="absolute inset-0 bg-blue-950   opacity-20"></div>
                            <div className="relative px-1 py-2 bg-transparent text-white">
                                <h1 className="text-white">Ernesto Carocca</h1>
                                <button onClick={handleLogout} className="mt-2 text-red-500">Logout</button>
                            </div>
                        </PopoverContent>
                </Popover>
            </div>
            );

}

export default OverlayButton;