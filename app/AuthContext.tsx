// AuthContext.tsx
'use client';
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";


interface User {
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

interface AuthContextType {
    user: User;
    loading: boolean;
    signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: { uid: null, email: null, displayName: null, photoURL: null },
    loading: true,
    signInWithEmailAndPassword: () => Promise.resolve(),
    signOut: () => Promise.resolve(),
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
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
                });
            } else {
                setUser({
                    uid: null,
                    email: null,
                    displayName: null,
                    photoURL: null,
                });
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signInWithEmailAndPassword = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, loading, signInWithEmailAndPassword, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
