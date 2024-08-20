'use client';
import { auth } from "@/app/firebase.config";
import SignupFormDemo from "@/components/example/signup-form-demo";
import { Sign } from "crypto";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState('signin');



  return (
   <div className=" flex  justify-center    h-screen "> 
    <div className=" flex items-center">
        <SignupFormDemo />
    </div>
   </div>
  );
};

export default SignIn;
