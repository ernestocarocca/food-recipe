import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/app/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserName } from '@/app/userprofile/interfaces/userName';
import { doc, setDoc } from 'firebase/firestore';
import { UserGoalInterface } from '@/app/userprofile/interfaces/Goals';
import { DateInterface, MonthResult, TrackGoal } from '@/app/userprofile/interfaces/UserHealthData';
import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';
import { BottomGradient, LabelInputContainer } from '@/app/login/component/signInForm';



export default function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState<number>(0);
    const [endGoalDate, setEndGoalDate] = useState<Date>( new Date());  
    const [description, setDescription] = useState('');
    const [endGoal, setEndGoal] = useState(0);
    const [goalWeight, setGoalWeight] = useState(0);
    const [monthNumber, setMonthNumber] = useState(0);
    const [loggForMonthInString, setLoggForMonthInString] = useState('');
    const [lastMothResult, setLastMothResult] = useState(0);
    const [weight, setWeight] = useState(0);
    const [discriptionThisMothResult, setDiscriptionThisMothResult] = useState('');
    const [userGoal, setUserGoal] = useState<UserGoalInterface | null>(null);
    
    const router = useRouter();
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            router.push('/dashboard');
        } else {
            console.log('no user');
        }
    }, [user, router]);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await createDocInFire(userCredential.user);
            router.push('/dashboard');
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    const createDocInFire = async (user: any) => {
        const userName: UserName = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            uid: user.uid,
        };
        const dateInterface: DateInterface = {
            logMothForTheResult: monthNumber,
            logYearForTheResult: loggForMonthInString,
        };
        const monthResult: MonthResult = {
            lastMothResult: lastMothResult,
            thisMothResult: weight,
            descriptionThisMonth: discriptionThisMothResult,
        }

        const trackgoal: TrackGoal = {
            description: description,
            endGoal: goalWeight,
            endGoalDate: dateInterface,
            monthResult: monthResult,
        };

        const userProfile = {
            userName: userName,
            date: {
                goalProgress: trackgoal,
            },
        };
        const userData = {
            Email: user.email,
            uid: user.uid,
            userGoal: userProfile,
        };

        await setDoc(doc(db, 'users', user.uid), userData);
        console.log('User data saved successfully!');
    };

    return (
        <div className="mx-auto  w-screen  max-w-sm  rounded-xl border-2 md:rounded-2xl p-6 md:p-8 dark:bg-black/60 backdrop-blur-md border-white md:mt-0 ">
            <h2 className="font-bold text-xl text-white dark:text-neutral-200">
                Welcome to DeCope
            </h2>
            <form onSubmit={handleSignup}>
                <LabelInputContainer className="mb-4  ">
                    <Label className="text-white" htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="sluta.copa@gmail.com"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label className="text-white" htmlFor="password">Lösenord</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </LabelInputContainer>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                <div>
                    <h1 className="text-green-600 px-4 font-bold">Användare: {auth.currentUser?.email}</h1>
                </div>
                <div className="flex flex-col space-y-4">
                    <button
                        type="submit"
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:bg-purple-700 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Registrera
                        </span>
                    </button>
                    <BottomGradient />
                    {/* <button onClick={() => signOut()} className="text-white">logout</button> */}
                </div>
            </form>
        </div>
    );
}
