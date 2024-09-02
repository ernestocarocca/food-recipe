'use client';
import { auth } from "@/app/firebase.config";

import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  useEffect, useState } from "react";
import { SignInForm } from "./component/signInForm";
import HandleSignUp from "./component/handleSignUp";


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState('/');
const router = useRouter();

useEffect(() => {
  if (auth.currentUser) {
  router.push('/dashboard');
  }
  else {

    router.push('/login');
    console.log('no user');
  }   
}
, [ router]);
    

  return (
    <div className=" flex  justify-center  w-screen  h-screen background-class "> 
    <div className=" flex items-center">

       <HandleSignUp>
         <SignInForm />
       </HandleSignUp>
    </div>
   </div>
  );
};

export default SignIn;
