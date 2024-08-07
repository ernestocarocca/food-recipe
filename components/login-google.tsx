"use client";

import { signIn } from "next-auth/react";

export default function LoginGoogle() {
    return (
        <div className=' flex justify-center items-center  w-screen h-screen'>
            <button onClick={()=>{signIn('google')}}> loginGoogle</button>
        </div>
    );
}