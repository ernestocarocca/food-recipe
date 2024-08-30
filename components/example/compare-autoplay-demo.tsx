import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (
    <div className="w-3/4 h-[60vh] px-1  md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d] border-none">
      <div
        style={{
          transform: "border-none translateZ(80px)",
        }}
        className="p-1 md:p-4 border rounded-3xl   mx-auto w-3/4 h-1/2 md:h-3/4"
      >
        <Compare
          firstImage="/images/alonso-reyes-0HlI76m4jxU-unsplash.jpg"
          secondImage="/images/fat.jpeg"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[22px] md:rounded-lg "
          slideMode="hover"
          
          autoplay={false}
        />
      </div>
    </div>
  );
}
