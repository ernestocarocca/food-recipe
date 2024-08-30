import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.config";
import { UserProfile } from "firebase/auth";
;

async function saveUserProfile(userProfile: UserProfile) {
    try {
        // Get a reference to the 'users' collection
        const usersCollectionRef = collection(db, 'users');

        // Create a new document in the 'users' collection
        const docRef = await addDoc(usersCollectionRef, {
            profile: userProfile.profile,
            yearlyGoals: userProfile.yearlyGoals
        });

        console.log("Document written with ID: ", docRef.id);   
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
