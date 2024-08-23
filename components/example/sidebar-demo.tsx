"use client";
import React, { use, useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { ChartResult } from "../chartsResult";
import { auth, db } from "@/app/firebase.config";
import { doc, getDoc } from "firebase/firestore";

import { DocumentData } from "firebase/firestore";
const Dashboard2 = () => {
  const [userDataFetch, setUserDataFetch] = useState<DocumentData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserData();
      if (userData) {
setUserDataFetch([userData]);
        console.log("User name:", userData);
        console.log("User email:", userData.Email);
      } else {
        console.log("No user data available.");
      }
    };

    fetchData();
  }, []);

  const fetchUserData = async () => {
    const user = auth.currentUser;

    if (user) {
      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log('User data:', data);

          // Return the user data
          return data;
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
  };


 

  return (
   
    <div>
  
  {userDataFetch.map((data, index) => (
    <div key={index}>
      <h1 className=" text-white"> namm:{  data.name}</h1>
      <h2 className="text-white">{data.Email}</h2>
      

    </div>
  ))}
</div>

  );
};
  
export default function SidebarDemo() {
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
    <div className={cn("rounded-md flex md:flex-row w-screen h-screen")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 h-full">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
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
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src=""
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1 h-full">
        {selectedSection === "Dashboard" && <Dashboard2 />}
        {selectedSection === "result" && <ChartResult />}
        {selectedSection === "UserProfile" && <UserProfile />}
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};



const UserProfile = () => {
  return (
    <div className="flex  h-full w-screen">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-transparent flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          <div className="h-20 w-full rounded-lg backdrop-blur-sm border-white border-[1px]">
            <Dashboard2 />
          </div>
          <div className="h-20 w-full rounded-lg backdrop-blur-sm border-white border-[1px]">
            <Dashboard2 />
          </div>
          <div className="h-20 w-full rounded-lg backdrop-blur-sm border-white border-[1px]">
            <Dashboard2 />
          </div>
        </div>
        
        <div className="flex gap-2 flex-1">
          <div className="h-full w-full rounded-lg backdrop-blur-sm border-white border-[1px]"></div>
          <div className="h-full w-full rounded-lg backdrop-blur-sm border-white border-[1px]"></div>
          <div className="h-full w-full rounded-lg backdrop-blur-sm border-white border-[1px]"></div>
        </div>
        
      </div>
    </div>
    
  );
};