"use client";

import { UserGoalInterface } from "@/app/userprofile/interfaces/Goals";
import { TrackGoal } from "@/app/userprofile/interfaces/UserHealthData";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";

type SidebarDemoProps = {
    children?: React.ReactNode;
};


export default function Dashboard2({ children }: SidebarDemoProps) {

    // const [userData, setUserData] = useState<DocumentData | null>(null);
    // const [listOfObject, setListOfObject] = useState<UserGoalInterface[]>([]) // Adjusted to an array of UserGoalInterface
    // const [age, setAge] = useState<number>(0);
    // const [weight, setWeight] = useState<number>(0);
    // const [height, setHeight] = useState<number>(0);
    // const [goal, setGoal] = useState<number>(0);
    // const [endGoal, setEndGoal] = useState<any>('');
    // const [description, setDescription] = useState<string>('');
    // const [date, setDate] = useState<string>('');
    // const [trackGoal, setTrackGoal] = useState<TrackGoal>({
    //     endGoalDate: new Date(),
    //     description: '',
    //     endGoal: 0,
    // });
    // const [userGoal, setUserGoal] = useState<UserGoalInterface | null>(null);



    // useEffect(() => {

    // const fetchUserData = async () => {
    //   const user = auth.currentUser;

    //   if (user) {
    //     try {
    //       const docRef = doc(db, 'users', user.uid);
    //       const docSnap = await getDoc(docRef);

    //       if (docSnap.exists()) {
    //         const data = docSnap.data();
    //         console.log('User dataObjekt:', JSON.stringify(data));

    //         const userG = data['userGoal']

    //         console.log("endG", JSON.stringify(userG))
    //         setListOfObject(Array.isArray(userG) ? userG : [userG]);


    //         return userG
    //       } else {
    //         console.log('No such document!');
    //         return null; // Indicate no data found
    //       }
    //     } catch (error) {
    //       console.error("Error fetching user data: ", error);
    //       return null; // Indicate an error occurred
    //     }
    //   } else {
    //     console.log('No user is signed in');
    //     return null; // Indicate no user is signed in
    //   }

    //   // }
    //   fetchUserData().then((data) => {
    //     console.log('User data:', data);

    //     if (data) {
    //       var goal: UserGoalInterface = data;
    //       console.log('User data:', goal);
    //       setListOfObject([goal]);

    //       const goalData = listOfObject[0]?.date.goalProgress;
    //       if (goalData) {
    //         setEndGoal(goalData.endGoal.toString());
    //         setDescription(goalData.description);
    //         setDate(goalData.endGoalDate instanceof Date ? goalData.endGoalDate.getFullYear().toString() : '');
    //         setTrackGoal(goalData);
    //       }
    //     }
    //   });

    // }
    //   , [auth.currentUser, description, endGoal, trackGoal]);




    return <> {children}</> 
}


        // <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        //   {listOfObject && listOfObject.map((goal, index) => (
        //     <React.Fragment key={index}>
        //       <CardHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        //         <Typography variant="h5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Dina mål: {goal.date.goalProgress.endGoal}</Typography>
        //         <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >Ålder: {goal.userName.age}</Typography>
        //       </CardHeader>
        //       <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        //         <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >Vikt: {goal.date.goalProgress.endGoal}</Typography>
        //         <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >Höjd: {goal.userName.age}</Typography>
        //       </CardBody>
        //     </React.Fragment>
        //   ))}

        // </div>

