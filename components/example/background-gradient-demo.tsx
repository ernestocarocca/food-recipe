import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";


type BackgroundGradientDemoProps = {
  children: React.ReactNode;
};

export default function BackgroundGradientDemo({ children }: BackgroundGradientDemoProps): JSX.Element {
  return (
    <div className="w-screen h-screen">
      <BackgroundGradient>
        <div
          className="z-30 bg-fixed"
          style={{
            backgroundImage: `url('/images/alexander-redl-d3bYmnZ0ank-unsplash.jpg')`,
            backgroundSize: "cover",
        
            backgroundRepeat: "no-repeat",
          
          }}
        >
          {children}
        </div>
      </BackgroundGradient>
    </div>
  );
}
