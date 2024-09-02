import React from 'react';

type Props = {
    children?: React.ReactNode;
};

export default function FrostedGlassComponent({ children }: Props) {
    return (
        <div className=" rounded-lg shadow-lg p-6 h-full">
            <div className="  w-full h-full ">
                {children}
            </div>
       </div>
    );
}