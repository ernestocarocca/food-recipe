'use client';
import React, { use, useEffect, useState } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.config';
import saveUserWeight from './components/userWeight';
import { Scroll } from 'lucide-react';
import scrollMonth from './components/scrolMonth';
import { Button } from '@/components/ui/moving-border';
import SignupFormDemo from '@/components/example/signup-form-demo';
import BentoGridThirdDemo from '@/components/example/bento-grid-demo-3';

const UserProfile = () => {
 
  return (
<div>
      <BentoGridThirdDemo />
</div>

   
   
  );
}

export default UserProfile
