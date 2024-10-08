"use client";

import { useRouter } from "next/navigation";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useEffect } from "react";
export default function TypewriterEffectSmoothDemo() {
  const router = useRouter();
  const handleRoute = () => {

    router.push("/login");
  }
  const joinNow = () => {
    router.push("/signup");
  }


  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "Future",
    },
    {
      text: "with",
    },
    {
      text: "DeCope WebApp",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-white font-extrabold dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button onClick={()=>{
          console.log("clicked")
          joinNow()
        }} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button onClick={() => {
          console.log("clicked")
          handleRoute()


        }} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Sign In
           </button>
      </div>
    </div>
  );
}
