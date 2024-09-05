"use client";

import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";




import SignupFormDemo from "./signup-form-demo";
import { auth, db } from "@/app/firebase.config";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { UserGoalInterface } from "@/app/userprofile/interfaces/Goals";


import BackgroundGradientDemo from "./background-gradient-demo";
import { Result } from "postcss";
import ResultFromFireBaseCard from "@/app/dashboard/components/card";
import GoalComponent from "@/app/dashboard/components/dateGoal";
import FrostedGlassComponent from "@/app/dashboard/components/frostGlasBackGeound";
import { Divider, Skeleton } from "@nextui-org/react";




const Dashboard2 = () => {
const[loading, setLoading] = useState(true)
  const [userData, setUserData] = useState<DocumentData | null>(null);
  const [listOfObject, setListOfObject] = useState<UserGoalInterface[]>([]) // Adjusted to an array of UserGoalInterface
  const [age, setAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
const [startWeight, setStartWeight] = useState<number>(0);
  const [endGoal, setEndGoal] = useState<any>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');

  const [userGoal, setUserGoal] = useState<UserGoalInterface | null>(null);



  useEffect(() => {
    
    
    const fetchUserData = async () => {
      setLoading(true)
      const user = auth.currentUser;

      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log('User dataObjekt:', JSON.stringify(data));

            const userG = data['userGoal']

            console.log("endG", JSON.stringify(userG))
            setListOfObject(Array.isArray(userG) ? userG : [userG]);


            return userG
          } else {
            console.log('No such document!');
            return null; // Indicate no data found
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
          return null; // Indicate an error occurred
        }
      } else {
        console.log('No user is signed in');
        return null; // Indicate no user is signed in
      } 



    }
    fetchUserData().then(() => {
      setLoading(false);


    

    } 
    );  
  }
  , []);

  return (
    
  <div className={'flex flex-col space-y-3'}>
    <Skeleton  />
      <div className=" flex justify-center items-center w-full h-screen">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 p-8 bg-white/30 backdrop-blur-md rounded-xl shadow-lg w-11/12 max-w-4xl border-white border-2">
            {loading ? (<h1>Loading....</h1>) : (listOfObject.map((goal, index) => (
              <div key={index} className="text-center p-8 space-y-6">
                <h1 className="text-blue-950 font-serif font-extrabold text-5xl tracking-wide">
                  RESULTAT
                </h1>
                <h1 className="font-extrabold text-green-600">
                  DATUM: {goal.date.goalProgress.endGoalDate.logYearForTheResult}

                </h1>
                <h1 className="text-teal-400 text-4xl font-semibold">
                  Namn: <span>{goal.userName.firstName}</span>
                </h1>
                <h2 className="text-gray-400 text-2xl">
                  Age: <span>{goal.userName.age}</span>
                </h2>
                <h2 className="text-white text-xl">
                  Description: <span>{goal.date.goalProgress.description}</span>
                </h2>
                <h2 className="text-white text-xl">
                  Weight: <span>{goal.date.goalProgress.endGoal}</span>
                </h2>

                <h2 className="text-white text-xl">
                  EndGoal: <span>{goal.date.goalProgress.endGoal}</span>
                </h2>
                <Divider className="bg-white" />
                <h1 className="text-white text-xl">
                  MÅNADS RESULTAT
                </h1>
                <h2>
                  Föregåendemånad: <span>{goal.date.goalProgress.monthResult.lastMothResult}</span>
                </h2>



              </div>
            )))}
          </div>
        </div>
      </div>

  </div>

  );
}








export function   SidebarDemo() {
  const [selectedSection, setSelectedSection] = useState("Dashboard");
  const [category, setCategory] = useState('weight');
  const [subCategory, setSubCategory] = useState('juni 2024');
  const [weight, setWeight] = useState(103);

  const links = [
    {
      label: "Dashboard",className:"text-white",
      
      href: "#",
      icon: <IconBrandTabler className=" text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "UserProfile",
      href: "#",
      icon: <IconUserBolt className="text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },

    {
      label: "Logout",
      href: "#",
      icon: <IconArrowLeft className=" text-white dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={cn("rounded-md flex flex-col md:flex-row w-full h-screen background-class text-white")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between  bg-blue-950 opacity-70  text-white" >
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <h2> DeCope</h2> : <h2></h2>}
            <div className="mt-8 flex flex-col gap-2 text-white">
              {links.map((link) => (
                <SidebarLink
                className="text-white"
                  key={link.label}
                  link={link}
                  onClick={() => {
                    setSelectedSection(link.label);
                    console.log("Clicked:", link.label);
                  }}
                />
              ))}
            </div>
          </div>
          <div>

          </div>
        </SidebarBody>
      </Sidebar>
      <div className=" md:w-32 lg:w-screen w-screen h-screen ">
        {selectedSection === "Dashboard" && <Dashboard2 />}

        {selectedSection === "UserProfile" && <UserProfile />}

      </div>
    </div>
  );
}





const UserProfile = () => {
  return (

    <div className="  rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-transparent  border-none  ">


      <div className="flex flex-grow   w-screen h-screen justify-center ">
        <div className="flex items-center  ">

          <SignupFormDemo />
        </div>


      </div>

    </div>





  );
};