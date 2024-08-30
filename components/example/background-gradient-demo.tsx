"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { Goal } from "lucide-react";

interface BackgroundGradientDemoProps {
  imageSrc?: string;
  text?: string;
  text2?: string;
  
  borderColor?: string;
  width?: string;
  height?: string;
  goal?: number;
endGoal?: string;
  description?: string;
  date?: string;


}


export default function BackgroundGradientDemo({
  imageSrc,
  endGoal,
  text,
goal,
  description,
  date,



  

  text2,
  borderColor = "border-gray-300",
  width = "w-[200px]",
  height = "h-[500px]",
}: BackgroundGradientDemoProps  ) {
  return (
    <div className={`rounded-[22px] ${width} `}>
      <BackgroundGradient className={`rounded-[22px] ${borderColor} border-1`}>
        <div className={`relative ${height} w-full`}>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="image"
              layout="fill"
              className="rounded-[22px] opacity-50"
              objectFit="cover"

            />
          )}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 text-white">
            <p className="text-base sm:text-2xl mt-4 mb-2 text-white"> Endgoal:{endGoal}</p>
            <ul>
              
              <li className="text-lg">Description: {description}</li>
              <li className="text-lg p-2 mx-2 m-3 font-extrabold"> { goal }</li>
              <li className="text-sm">{date && date.toString( )}</li>
            



            </ul>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}