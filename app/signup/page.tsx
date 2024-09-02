"use client";


import { useEffect, useState } from 'react';
import { UserGoalInterface } from '../userprofile/interfaces/Goals';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/app/firebase.config';
import SignInForm from './components/signUpForm';
import { doc, setDoc } from 'firebase/firestore';


const SignupPage = () => {


  


  return (
    <div className=' flex justify-center h-screen w-screen   '>

  <div className="flex items-center ">
    <SignInForm />

      <div>
        
        
      </div>  
  </div>
  </div>
  );
};

export default SignupPage;



