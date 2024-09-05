

import TypewriterEffectSmoothDemo from "@/components/example/typewriter-effect-demo-1";


export default function Home() {





  return (
    <main className="flex justify-center border-none  items-center border w-screen background-class h-screen ">
 
  <div className="flex items-center">
  <div className="flex flex-col items-center">
          <TypewriterEffectSmoothDemo />
   
   
  </div>
  
 
  </div>


    </main>
  );
}
Home.requireAuth = true;
