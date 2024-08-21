"use client";
import BackgroundBeamsDemo from "@/components/example/background-beams-demo";
import BentoGridDemo from "@/components/example/bento-grid-demo";


import Image from "next/image";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/moving-border";
import { use, useEffect } from "react";
import TypewriterEffectSmoothDemo from "@/components/example/typewriter-effect-demo-1";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";


export default function Home() {



  async function writeUserData() {
    const db = getFirestore();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(() => {

    const firebaseConfig = {
      apiKey: "AIzaSyAygfq26-9sIv0Ke_YMdCCaxOYzLzGMvZc",
      authDomain: "recipesforfood-f2b84.firebaseapp.com",
      projectId: "recipesforfood-f2b84",
      storageBucket: "recipesforfood-f2b84.appspot.com",
      messagingSenderId: "149886468885",
      appId: "1:149886468885:web:5be262036d3b2e7acc5f1c"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
    , [ ]);


  return (
    <main className="flex justify-center border-none  items-center border w-screen ">
 
  <div className="flex items-center">
  <div className="flex flex-col items-center">

   
   
  </div>
        <TypewriterEffectSmoothDemo />
  </div>


    </main>
  );
}
Home.requireAuth = true;
