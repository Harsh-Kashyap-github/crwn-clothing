import { createContext, useEffect, useState } from "react";
import { creatUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

//as the actual value you want t access
export const UserContext=createContext({
    //Default Value
    currentUser:null,
    setCurrentUser:() =>null
});

export const UserProvider =({children}) =>{
    const[currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser
    }
    useEffect(() =>{
        const unsubscribe =onAuthStateChangedListener((user) =>{
            if(user)
            {
                creatUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}