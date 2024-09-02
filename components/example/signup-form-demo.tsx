"use client";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/progress";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import ScrollMonth from "@/app/userprofile/components/scrolMonth";
import { Textarea } from "../ui/textarea";

import { auth } from "@/app/firebase.config";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { UserName } from "@/app/userprofile/interfaces/userName";

import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";
import { DateInterface, MonthResult, TrackGoal } from "@/app/userprofile/interfaces/UserHealthData";


const db = getFirestore();

const SignupFormDemo = () => {
  const [value, setValue] = useState(0);
  const [firstName, setFirstName] = useState("ahmed");
  const [lastName, setLastName] = useState("serna");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
const [selectedYear, setSelectedYear] = useState<Date>(new Date());

// Get the month number (1-12)
const monthNumber = selectedYear.getMonth() + 1; // `getMonth` returns 0-11, so add 1

// Get the month name as a string
const loggForMonthInString = selectedYear.toLocaleString('default', { month: 'long' });

// Get the year number
const year = selectedYear.getFullYear();



  const [startWeight, setStarGoal] = useState("");
  const [goalWeight, setEndGoal] = useState(300);
  const [description, setDiscrptionGoal] = useState("");
  const [loggForMonth, setLoggForMonth] = useState("");

  const [thisMothResult, setThisMothResult] = useState(0);
  const [discriptionThisMothResult, setDiscriptionThisMothResult] = useState("");
  const [weight, setWeight] = useState(0);
  const [lastMothResult, setLastMothResult] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [monthGoal, setMonthGoal] = useState("");
  const user = auth.currentUser;

  const handleStartWeight = (startWeight: string) => {
    setStarGoal(startWeight);
    console.log("startWeight:" + startWeight);
  };

  const handleGoalWeight = (goalWeight: number) => {
    setEndGoal(goalWeight);
    console.log("goalWeight:" + goalWeight);
  };

  const handleDiscrptionGoal = (discrptionGoal: string) => {
    setDiscrptionGoal(discrptionGoal);
    console.log("discrptionGoal:" + discrptionGoal);
  };
  const handleDiscriptionMonthGoal = (monthGoal: string) => {
    setMonthGoal(monthGoal);
    console.log("monthGoal:" + monthGoal);
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = getAuth().currentUser;
      if (!user) {
        console.error('No user is signed in');
        return; // Exit early
      }

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

      await updateDoc(doc(db, "users", user.uid), {
        userGoal: userProfile,
      });


      console.log('Document updated successfully!');
    
    } catch (error) {
      console.error('Signup error:', error);
    }
  };
  useEffect(() => {
    console.log('user:', user);
    if (user) {
      console.log('User is signed in');

    } else {
      console.log('No user is signed in');
    }
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, [user]);











  console.log("user", user)




  return (
    <div className=" max-w-md mx-auto rounded-none md:rounded-xl p-4 md:p-2 shadow-input bg-transparent dark:bg-black text-white border-white border-2 z-30  items-center">
  <div className="p-5">
        <h2 className="font-bold text-lg md:text-3xl dark:text-neutral-200 sm:text-2xl ">
          Översikt plan för dina <span className="text-red-500 line-through">Cope</span> <span className="glow">MÅL</span> Årsplan
        </h2>
        <p className="text-sm max-w-sm mt-2 text-white">
          Grund uppgifter för att skapa en plan för att nå dina drömmar och mål
        </p>

        <form className="my-8" onSubmit={handleSignup}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label className="text-white opacity-75" htmlFor="startWeight">Nuvarande vikt</Label>
              <BackgroundGradient>
                <Input className="opacity-75" onChange={(e) => handleStartWeight(e.target.value)} id="startWeight" placeholder="Startvikt" type="text" />
              </BackgroundGradient>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className="text-white opacity-75" htmlFor="goalWeight">Målvikt</Label>
              <BackgroundGradient>
                <Input className="opacity-75" onChange={(e) => handleGoalWeight(Number(e.target.value))} id="goalWeight" placeholder="Målvikt" type="number" />
              </BackgroundGradient>
            </LabelInputContainer>
          </div>

          <div>
            <BackgroundGradient containerClassName="discription" className="bg-white rounded-lg opacity-75">
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
            <h1 className="text-lg font-bold ">Månad mål</h1>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label className="text-white " htmlFor="firstname">Nuvarande vikt</Label>
                <Input className=" opacity-85" onChange={() => handleStartWeight} id="firstname" placeholder="Ingånde resultat" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label className="text-white" htmlFor="lastname">Målvikt</Label>
                <Input className="opacity-85" id="lastname" placeholder="Månadens Resultat" type="text" />
              </LabelInputContainer>
            </div>
            <ScrollMonth  onMonthSelect={(e) => setSelectedMonth(e.target.value)} />
            <Textarea
              id="monthGoal"
              className="w-full bg-white rounded-lg opacity-75"
              placeholder="Månadens mål"
              onChange={(e) => setMonthGoal(e.target.value)}
            />

            <div className="flex justify-center items-center relative ">
              <Button

                className=" border-white hover:shadow-2xl hover:border-green-600 text-white"

                type="submit"
              >
                Spara
              </Button>

            </div>
          </div>
        </form>
  </div>
  

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