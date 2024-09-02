import { auth } from "@/app/firebase.config";


const user = auth.currentUser;

export interface UserName {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    uid: string;
}


