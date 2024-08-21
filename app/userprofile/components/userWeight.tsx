import { auth, db } from '@/app/firebase.config';
import { doc, setDoc } from 'firebase/firestore';


const saveUserWeight = async (category: string, subCategory: string, weight: number) => {
    const user = auth.currentUser;

    if (user) {
        try {
            // Referera till underkollektionen baserat på kategori och sub-kategori
            const docRef = doc(db, 'users', user.uid, category, subCategory);

            // Spara vikten i dokumentet
            await setDoc(docRef, { weight });

            console.log('Weight data saved successfully!');
        } catch (error) {
            console.error("Error saving weight data: ", error);
        }
    } else {
        console.log('No user is signed in');
    }
};
