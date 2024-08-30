"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import moment from "moment"; // Add this line to import the 'moment' library
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

import { ChartResult } from "../chartsResult";


import SignupFormDemo from "./signup-form-demo";
import { auth, db } from "@/app/firebase.config";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { UserGoalInterface } from "@/app/userprofile/interfaces/Goals";
import { TrackGoal } from "@/app/userprofile/interfaces/UserHealthData";

import BackgroundGradientDemo from "./background-gradient-demo";




const Dashboard2 = () => {

  const [userData, setUserData] = useState<DocumentData | null>(null);
  const [listOfObject, setListOfObject] = useState<UserGoalInterface[]>([]) // Adjusted to an array of UserGoalInterface
  const [age, setAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [goal, setGoal] = useState<number>(0);
  const [endGoal, setEndGoal] = useState<any>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [trackGoal, setTrackGoal] = useState<TrackGoal>({
    endGoalDate: new Date(),
    description: '',
    endGoal: 0,
  });
  const [userGoal, setUserGoal] = useState<UserGoalInterface | null>(null);



  useEffect(() => {

    const fetchUserData = async () => {
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
    fetchUserData().then((data) => {
      console.log('User data:', data);

      if (data) {
        var goal: UserGoalInterface = data;
        console.log('User data:', goal);
        setListOfObject([goal]);

        const goalData = listOfObject[0]?.date.goalProgress;
        if (goalData) {
          setEndGoal(goalData.endGoal.toString());
          setDescription(goalData.description);
          const unputDate = goalData.endGoalDate.getFullYear() + '-' + (goalData.endGoalDate.getMonth() + 1) + '-' + goalData.endGoalDate.getDate();
          const dateMoment = moment(unputDate).format('YYYY-MM-DD');
          const formattedDate = moment(dateMoment).format('YYYY-MM-DD');
          console.log('formattedDate:', formattedDate);
          setDate(formattedDate.toString());
          setTrackGoal(goalData);
        }
      }
    });
    

  }, [auth.currentUser, ]);




  return (


    <div className=" bg-black h-screen flex justify-center items-center">
      {/* <Card className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            {listOfObject && listOfObject.map((goal, index) => (
              <React.Fragment key={index}>
                <CardHeader>
                  <CardTitle>dina mål: {goal.date.goalProgress.endGoal}</CardTitle>
                  <CardDescription>ålder: {goal.userName.age.toString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>vikt: {goal.userName.email}</p>
                </CardContent>
              </React.Fragment>
            ))}
          </Card>
          <CardDeafault /> */}
      <div className="">   <BackgroundGradientDemo 
      imageSrc="/images/alexander-redl-d3bYmnZ0ank-unsplash.jpg"
      //  endGoal={listOfObject[0]?.date.goalProgress.endGoal.toString()}  
      endGoal={ endGoal && endGoal}
    
        description={description}
        date={date}
        goal={trackGoal.endGoal}
        text="Your goal"  text2="Your progress"



        borderColor="border-white" width="w-[500px]" height="h-[700px]"
      />
      </div>


    </div>


  );
};









export function SidebarDemo() {
  const [selectedSection, setSelectedSection] = useState("Dashboard");
  const [category, setCategory] = useState('weight');
  const [subCategory, setSubCategory] = useState('juni 2024');
  const [weight, setWeight] = useState(103);

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "UserProfile",
      href: "#",
      icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "result",
      href: "#",
      icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Logout",
      href: "#",
      icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={cn("rounded-md flex flex-col md:flex-row w-full h-screen")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 h-full">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <h2> DeCope</h2> : <h2></h2>}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link) => (
                <SidebarLink
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
      <div className=" md:w-32 lg:w-screen ">
        {selectedSection === "Dashboard" && <Dashboard2 />}
        {selectedSection === "result" && <ChartResult />}
        {selectedSection === "UserProfile" && <UserProfile />}

      </div>
    </div>
  );
}





const UserProfile = () => {
  return (

    <div className="    rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-transparent flex  gap-2 flex-1 border-none  ">


      <div className="flex flex-grow   w-screen ">
        <div className="h-full w-screen rounded-lg backdrop-blur-sm  ">

          <SignupFormDemo />
        </div>


      </div>

    </div>





  );
};