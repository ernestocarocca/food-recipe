"use client";


import { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase.config';
import SignInForm from './components/signUpForm';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/'); // Redirect to the home page after successful signup
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup errors (e.g., display an error message)
    }
  };

  return (
<div className=' flex justify-center h-screen'>
      <div className=' flex items-center'>  < SignInForm /></div>
    </div>
  );
};

export default SignupPage;



