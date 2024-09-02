import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

export default async function FetchData() {
    const user = auth.currentUser
    if (!user) {
        console.log('No user is signed in');
        return null;
    } 
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef).then((docSnap: any) => docSnap.data().tojson());   
    
        
    console.log('docSnap:', docSnap);
    if (docSnap.exists()) {
        const data = docSnap.data();
        console.log('User dataObjekt:', JSON.stringify(data));
    }
    else {
        console.log('No such document!');
    }
    return <>
    {docSnap}
    </>;
}