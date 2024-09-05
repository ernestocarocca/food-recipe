


'use client';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import { useRouter } from "next/navigation";

interface User {
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    loggedIn: boolean;
}

export interface AuthContextType {

    user: User;
    loading: boolean;
   

    
}

const AuthContext = createContext<AuthContextType>({

    user: { uid: null, email: null, displayName: null, photoURL: null , loggedIn: false},
    loading: true,
   

});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        loggedIn: false, 
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,

                    loggedIn: true,

                });
            } else {
                setUser({
                    uid: null,
                    email: null,
                    displayName: null,
                    photoURL: null,
                    loggedIn: false,
                });

            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signInUser = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };
    const router = useRouter();
    const signOutUser = async () => {

        try {
            await auth.signOut();
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
            <AuthContext.Provider
                value={{ user, loading }}
            >
                {children}
            </AuthContext.Provider>
        );
};

export { AuthContext, AuthProvider, signOut };
