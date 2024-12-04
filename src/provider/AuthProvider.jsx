import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";


export const AuthProviderContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [error, setError] = useState({})
    const google = new GoogleAuthProvider();

    // Create New User 
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Create User with Google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, google);
    }

    // Log in user 
    const loginUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Log out user 
    const logOutUser = () => {
        return signOut(auth);
    }

    // Send user password reset
    const sendRestPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // Update user profile
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    // On Auth state change 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        createNewUser,
        loginWithGoogle,
        loginUserWithEmail,
        logOutUser,
        user,
        setUser, 
        loading,
        setLoading,
        updateUserProfile,
        sendRestPassword,
        error,
        setError
    }
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthProviderContext);
    return context;
}

export default AuthProvider;