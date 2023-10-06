import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"; 
import app from "../dragon/dragon.config";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);     
    }

    const logOut = () => {
      return signOut(auth);
    }

    const signIn = (email, password) =>{
      return signInWithEmailAndPassword(auth, email, password);
    }

      useEffect( () => {
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changes', currentUser);
        setUser(currentUser);
       })
       return () => {
        unSubscribe();
       }
    }, [])

    const authInfo = {
        user,
       createUser,
       signIn,
       logOut,

    }

    return (

   <AuthContext.Provider value={authInfo}>
     {children}
   </AuthContext.Provider>

    );

};

export default AuthProvider;