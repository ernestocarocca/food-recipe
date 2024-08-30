import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase.config";


interface YearlyDataUpdate {
    uid : string;
    year: number;
    startWeight: number;
    endWeight: number;
}



const updateYearGoal = async ({ uid, year, startWeight, endWeight }: YearlyDataUpdate) => {
    const userDoc = doc(db, 'users', uid);

    const updatedYearlyData = {
        year,
        startWeight,
        endWeight,
        monthlyProgress: [] // Du kan lämna detta tomt om du bara vill uppdatera start- och slutvikt
    };

    try {
        await updateDoc(userDoc, {
            'userProfile.yearlyData': arrayRemove({ year }), // Tar bort det gamla året
        });
        await updateDoc(userDoc, {
            'userProfile.yearlyData': arrayUnion(updatedYearlyData), // Lägger till det uppdaterade året
        });
        console.log(`Yearly goal updated for ${year}`);
    } catch (error) {
        console.error('Error updating yearly goal:', error);
    }
};
export default updateYearGoal;

