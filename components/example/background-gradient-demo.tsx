"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

const months = [
  "JANUARI", "FEBRUARI", "MARS", "APRIL", "MAJ", "JUNI",
  "JULI", "AUGUSTI", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DECEMBER"
];

export default function BackgroundGradientDemo() {
  return (
    <div className="w-full  overflow-x-auto  h-screen  m-5">
      <div className="flex space-x-6">
        {months.map((month, index) => (
          <div key={index} className=" min-w-[300px]">
            <BackgroundGradient className="rounded-[22px] ">
              <div className="relative h-[500px] w-full">
                <Image
                  src={`/images/alonso-reyes-0HlI76m4jxU-unsplash.jpg`}
                  alt={month}
                  layout="fill"
                  className="rounded-[22px]"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 text-white">
                  <p className="text-base sm:text-2xl mt-4 mb-2">{month}</p>
                  <ul>
                    <li className="text-sm">totalvikt: 103</li>
                  </ul>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
}
