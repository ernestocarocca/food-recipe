"use client";
import React, { useEffect, useId, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

import ScrollMonth from "@/app/userprofile/components/scrolMonth";

import { Textarea } from "../ui/textarea";
import { Button } from "../ui/moving-border";
import { auth } from "@/app/firebase.config";
import { doc } from "@firebase/firestore";

import { addDoc, collection, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';

import { createUserWithEmailAndPassword, getAuth, UserProfile } from "firebase/auth";

import { m } from "framer-motion";
import { UserName } from "@/app/userprofile/interfaces/userName";
import { BackgroundGradient } from "../ui/background-gradient";


const db = getFirestore()


const SignupFormDemo = () => {
  const [firstName, setFirstName] = useState("ahmed");
  const [selectedYear, setSelectedYear] = useState(2024);
  const [startWeight, setStartWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [copeGoal, setCopeGoal] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [monthGoal, setMonthGoal] = useState("");
  const [monthWeight, setMonthWeight] = useState("");
  const [monthGoalWeight, setMonthGoalWeight] = useState("");
  const [monthGoalWeight2, setMonthGoalWeight2] = useState("");
  const [discrptionGoal, setDiscrptionGoal] = useState("");
  const [weight, setWeight] = useState(0);
  const user = auth.currentUser;
  const handleStartWeight = (startWeight: string) => {
    setStartWeight(startWeight);
    console.log("startWeight:" + startWeight);
  };

  const handleGoalWeight = (goalWeight: string) => {
    setGoalWeight(goalWeight);
    console.log("goalWeight:" + goalWeight);
  };

  const handleMonthSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    console.log("Selected month:" + e.target.value);
  };

  const handleMonthGoal = (monthGoal: string) => {
    setMonthGoal(monthGoal);
    console.log("monthGoal:" + monthGoal);
  };

  const handleMonthWeight = (monthWeight: string) => {
    setMonthWeight(monthWeight);
    console.log("monthWeight:" + monthWeight);
  };

  const handleMonthGoalWeight = (monthGoalWeight: string) => {
    setMonthGoalWeight(monthGoalWeight);
    console.log("monthGoalWeight:" + monthGoalWeight);
  };

  const handleMonthGoalWeight2 = (monthGoalWeight2: string) => {
    setMonthGoalWeight2(monthGoalWeight2);
    console.log("monthGoalWeight2:" + monthGoalWeight2);
  };

  const handleDiscrptionGoal = (discrptionGoal: string) => {
    setDiscrptionGoal(discrptionGoal);
    console.log("discrptionGoal:" + discrptionGoal);
  };
  // const updateProgress = async () => {
  //   const marchProgress: MonthlyProgress = {
  //     month: 3,
  //     startWeight: 75,
  //     endWeight: 72,
  //     goalWeight: 73,
  //     achieved: true
  //   };

  //   const progressUpdate = {
  //     year: 2024,
  //     month: 3,
  //     updatedProgress: marchProgress // Skicka som ett enskilt objekt
  //   };

  //   try {
  //     await updateMonthlyProgress(progressUpdate);
  //     console.log('March progress updated');
  //   } catch (error) {
  //     console.error('Error updating March progress:', error);
  //   }
  // }

  // Assuming you have a reference to your Firestore database


  // Assuming you have the document ID of the user



  // Import the necessary Firebase modules


  // Initialize Firestore


  // Get the user's UID
  const updateMonthlyGoals = (
    monthlyGoals: any[],
    selectedMonth: string,
    discrptionGoal: string,
    startWeight: string,
    goalWeight: string,
    monthGoalWeight: string,
    monthGoal: string
  ) => {
    return monthlyGoals.map(goal => {
      if (goal.month === selectedMonth) {
        return {
          ...goal,
          goal: discrptionGoal,
          startWeight: startWeight,
          endWeight: goalWeight,
          goalWeight: monthGoalWeight,
          achieved: true
        };
      }
      return goal;
    });
  };


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      const user = getAuth().currentUser;
      const userName: UserName = {
        firstName: 'erzluta',
        lastName: '1111',

        age: 3000,
        email: "wwrflv",
        uid: "vvvvvv"
      }

      const userProfile: UserProfile = {

        name: userName,
      }



      if (!user) {
        console.error('No user is signed in');
        return; // Exit early

      } else {
        await updateDoc(doc(db, "users", user.uid), {
          'startWeight': startWeight,
          'goalWeight': goalWeight,
          'Year': new Date().getFullYear(),
          copeGoal: "Lose weight",
          monthlyGoals: [
            {
              updateMonthlyGoals: updateMonthlyGoals,
            }

          ]
        }).then(() => {
          console.log('Document updated successfully!');
        })
          .catch((error: any) => {
            console.error('Error updating document:', error);
          });

        console.log('User profile created:', userProfile);

        console.log('User profile created:', userProfile);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  useEffect(() => {
    console.log('user:', user);
    if (user) {
      console.log('User is signed in');
      setWeight(75);
    } else {
      console.log('No user is signed in');
    }
  }
    , [ user]);







  return (
    <div className="max-w-md mx-auto rounded-none md:rounded-xl p-4 md:p-8 shadow-input bg-transparent dark:bg-black text-white">
      <h2 className="font-bold text-lg md:text-3xl dark:text-neutral-200 sm:text-2xl">
        Översikt plan för dina <span className="text-red-500 line-through">Cope</span> <span className="glow">MÅL</span> Årsplan
      </h2>
      <p className="text-sm max-w-sm mt-2 text-white">
        Grund uppgifter för att skapa en plan för att nå dina drömmar och mål
      </p>

      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-white opacity-75 " htmlFor="startWeight">Nuvarande vikt</Label>
 <BackgroundGradient>
  
              <Input className="opacity-75" onChange={(e) => handleStartWeight(e.target.value)} id="startWeight" placeholder="Startvikt" type="text" />
 </BackgroundGradient>
          </LabelInputContainer>
          <LabelInputContainer>
            
            <Label className="text-white opacity-75" htmlFor="goalWeight">Målvikt</Label>
            <BackgroundGradient>
              <Input className="opacity-75" onChange={(e) => handleGoalWeight(e.target.value)} id="goalWeight" placeholder="Målvikt" type="text" />
              </BackgroundGradient>
          </LabelInputContainer>
        </div>

        <div>
      <BackgroundGradient  containerClassName="discription" className="bg-white rounded-lg opacity-75">
        
            <Textarea
              id="copeGoal" 
              placeholder="Beskriv ditt mål"
              className="w2-full text-xl text-black"
              onChange={(e) => handleDiscrptionGoal(e.currentTarget.value)}
            />
      </BackgroundGradient>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-100 dark:via-neutral-100 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4 justify-center">
          <h1>Månad mål</h1>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label className="text-white" htmlFor="firstname">Nuvarande vikt</Label>
              <Input onChange={() => handleStartWeight} id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className="text-white" htmlFor="lastname">Målvikt</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <ScrollMonth onMonthSelect={handleMonthSelect} />
          <Textarea
            id="monthGoal"
            placeholder="Månadens mål"
            onChange={(e) => handleMonthGoal(e.target.value)}
          />

          <div className="flex justify-center items-center relative group-[]:">
            <Button
              borderRadius="240px"
              className="btn bg-slate-800 opacity-50 hover:opacity-100 border-white hover:shadow-2xl hover:border-green-600 text-white"
              containerClassName="my-container-class"
              onClick={()=>handleSignup}

            >
              Spara
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default SignupFormDemo;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};