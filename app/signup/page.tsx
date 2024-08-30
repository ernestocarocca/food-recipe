"use client";


import { useEffect, useState } from 'react';
import { UserGoalInterface } from '../userprofile/interfaces/Goals';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/app/firebase.config';
import SignInForm from './components/signUpForm';
import { doc, setDoc } from 'firebase/firestore';
import { UserName } from '../userprofile/interfaces/userName';
import { TrackGoal } from '../userprofile/interfaces/UserHealthData';

const SignupPage = () => {


  


  return (
<div className=' flex justify-center h-screen'>
      <div className=' flex items-center'>  < SignInForm /></div>
    </div>
  );
};

export default SignupPage;



