import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.init'


export const AuthContext = createContext('')


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        return signInWithPopup( auth, googleProvider )
    }

    const handleRegister = ( email, password ) => {
        return createUserWithEmailAndPassword( auth , email, password)
    }

    const handleSignIn = ( email, password ) =>{
        return signInWithEmailAndPassword( auth, email, password)
    }

    const handleSignOut = () =>{
        return signOut( auth )
    }

    const manageProfile = ( name, photo ) =>{
        return  updateProfile( auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const handleResetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth, (currentUser)=>{
            // console.log(currentUser);
            if( currentUser ){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoader(false)

            return () =>{
                unsubscribe()
            }
        })
    },[])

    const authInfo = {
        user,
        handleGoogleSignIn,
        handleRegister,
        handleSignIn,
        handleSignOut,
        manageProfile,
        loader,
        setUser,
        handleResetPassword
    }
    return (
        <AuthContext.Provider value={ authInfo }>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;