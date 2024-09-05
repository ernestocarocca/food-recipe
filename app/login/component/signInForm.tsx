
import React, { use, useContext, useEffect, useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../../../components/ui/button";




import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/app/firebase.config";
import { CircularProgress } from "@nextui-org/progress";
import { AuthContext, AuthContextType } from "@/app/AuthContext";




export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const user = useContext(AuthContext);
  
  const handleSignup = async (e: React.FormEvent) => {
    const [ lUser, setLuser] = useState<AuthContextType>();    
    const getFirebaseUser = auth.currentUser;
    e.preventDefault();
    try {
      await  signInWithEmailAndPassword(auth, email, password);
      const localUser: AuthContextType = 
        {
          user: {
            uid: getFirebaseUser?.uid || null,
            email: getFirebaseUser?.email || null,
            displayName:  getFirebaseUser?.displayName  || null,
            photoURL: getFirebaseUser?.photoURL || null,
            loggedIn: true,
          },
          loading: false,
        
        }
      setLuser(localUser);
        


      








      router.push('/dashboard'); // Redirect to the home page after successful signup
    } catch (error) {

      console.error('Signup error:', error);
<h1>Rong username or password</h1>
    }
  };



  return (
    <div className="max-w-md w-full  mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 bg-white/20 dark:bg-black/30 backdrop-blur-sm border border-white mt-16 md:mt-0 justify-center items-center">
      <h2 className="font-bold text-xl text-white dark:text-neutral-200">
        Welcome to DeCope
      </h2>
    
      <p className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
        Sign up to DeCope if you can start your journey to a better life.
      </p>

      <form className="my-8" onSubmit={handleSignup}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
       
        </div>
        <LabelInputContainer className="mb-4">
          <Label className=" text-white" htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="sluta.copa@gmail.com" type="email" onChange={(e) => setEmail(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className=" text-white" htmlFor="password">Lösenord</Label>
          <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setPassword(e.target.value)} />
        </LabelInputContainer>

  

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div>
     
      </div>
        <div className="flex flex-col space-y-4">
          <Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:bg-purple-700 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            
              {isLoading ? <CircularProgress aria-label="Loading..." /> : "Logga in"}
              
            </span>
          </Button>
          <BottomGradient />
          {/* <button onClick={() => signOut()} className="text-white">logout</button> */}
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export {LabelInputContainer , BottomGradient , SignInForm};




// "use client";
// import React, { useEffect, useState } from "react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { cn } from "@/lib/utils";

// import {

//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";
// import { Session } from "inspector";
// import { SessionProvider } from 'next-auth/react'
// import { useRouter } from "next/navigation";
// import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "@/app/firebase.config";




// export default function SignupFormDemo() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     if (auth.currentUser) {
//       router.push('/landingpage');
//     }
//     else {
//       console.log('no user');
//     }

//   }, [signOut]);
//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       router.push('/'); // Redirect to the home page after successful signup
//     } catch (error) {
//       console.error('Signup error:', error);
//       // Handle signup errors (e.g., display an error message)
//     }
//   };

//   return (
//     <div className="max-w-md w-full  mx-auto rounded-none  md:rounded-2xl p-4 md:p-8 bg-white/20 dark:bg-black/30 backdrop-blur-sm border border-white mt-16 md:mt-0 justify-center items-center">
//       <h2 className="font-bold text-xl text-white dark:text-neutral-200">
//         Welcome to DeCope
//       </h2>

//       <p className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300">
//         Sign up to DeCope if you can start your journey to a better life.
//       </p>

//       <form className="my-8" onSubmit={handleSignup}>
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

//         </div>
//         <LabelInputContainer className="mb-4">
//           <Label className=" text-white" htmlFor="email">Email Address</Label>
//           <Input id="email" placeholder="sluta.copa@gmail.com" type="email" onChange={(e) => setEmail(e.target.value)} />
//         </LabelInputContainer>
//         <LabelInputContainer className="mb-4">
//           <Label className=" text-white" htmlFor="password">Lösenord</Label>
//           <Input id="password" placeholder="••••••••" type="password" onChange={(e) => setPassword(e.target.value)} />
//         </LabelInputContainer>



//         <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
//         <div>
//           <h1 className=" text-green-600 px-4 font-bold">Användare: {auth.currentUser?.email}
//           </h1>
//         </div>
//         <div className="flex flex-col space-y-4">
//           <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:bg-purple-700 focus:ring-offset-2 focus:ring-offset-slate-50">
//             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//               Logga in
//             </span>
//           </button>
//           <BottomGradient />
//           {/* <button onClick={() => signOut()} className="text-white">logout</button> */}
//         </div>
//       </form>
//     </div>
//   );
// }

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };