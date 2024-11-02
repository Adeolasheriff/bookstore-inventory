import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.config.js"
import { getAuth ,createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword, signOut} from "firebase/auth";

const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();

 export const AuthContext = createContext()

export function AuthProvider ({children}) {
    const [user,setUser] = useState(null)
    const [ loading,setLoading] = useState()

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
     // sign in with google

     const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }
  
 //logout

 const Logout = () => { 
    signOut(auth)
    setUser(null)
 }

    //login

    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
            // console.log(currentUser)
        }) 
        return () => {
            return unsubscribe
        }
    },[])

    const authInfo = {
        createUser,
        user,
        signInWithGoogle,
        login,
        loading,
        Logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
     </AuthContext.Provider>  

     )
    }
export default AuthProvider