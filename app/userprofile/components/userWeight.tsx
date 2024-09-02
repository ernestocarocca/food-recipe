import { auth, db } from '@/app/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

const saveUserWeight = async (category: string, subCategory: string, weight: number) => {
    const user = auth.currentUser;

    if (user) {
        try {
            // Referera till underkollektionen baserat på kategori och sub-kategori
            const docRef = doc(db, 'users', user.uid, category, subCategory);

            // Get the current month
            const date = new Date();
            const month = date.toLocaleString('default', { month: 'long' }); // Or use date.getMonth() + 1 for numerical month

            // Spara vikten i dokumentet
            await setDoc(docRef, { weight, month });

            console.log('Weight data saved successfully!');
        } catch (error) {
            console.error("Error saving weight data: ", error);
        }
    } else {
        console.log('No user is signed in');
    }
};

export default saveUserWeight;
