// signUpForm.tsx

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth, db } from '../firebase.config';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import  { useRouter } from 'next/navigation';

const handleSignup = async (e: React.FormEvent) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create a new document in the 'users' collection with the user's UID
        await setDoc(doc(db, 'users', user.uid), {
            Year: {
                '2024': {
                    Month: generateMonthData()
                }
            },
            email: user.email,
            uid: user.uid,
        });

        router.push('/'); // Redirect to the home page after successful signup
    } catch (error) {
        console.error('Signup error:', error);
        // Handle signup errors (e.g., display an error message)
    }
};

function generateMonthData() {
    throw new Error('Function not implemented.');
}
