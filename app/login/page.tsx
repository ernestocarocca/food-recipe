'use client';
import { auth } from "@/app/firebase.config";
import SignupFormDemo from "@/components/example/signup-form-demo";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  useEffect, useState } from "react";

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
, [ ]);
    

  return (
   <div className=" flex  justify-center    h-screen "> 
    <div className=" flex items-center">
        <SignupFormDemo />
    </div>
   </div>
  );
};

export default SignIn;
