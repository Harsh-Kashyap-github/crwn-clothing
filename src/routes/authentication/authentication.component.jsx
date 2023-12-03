import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { useEffect } from "react";

import { signInWithGooglePopup,
    creatUserDocumentFromAuth,
    signInWithGoogleRedirect, 
    auth} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import '../authentication/authentication.styles.scss'

const Authentication=() =>{
    useEffect(() =>async()=>{
        
            const response=await getRedirectResult(auth);
        if(response)
        {
          const userDocRef=  await creatUserDocumentFromAuth(response.user);
          console.log(userDocRef);
        }
    },[])
    const logGoogleUser=async ()=>{
        const {user}=await signInWithGooglePopup();
        const userDocRef=await creatUserDocumentFromAuth(user);
        console.log(user,userDocRef);
    };
    return(
        <div className="authentication-container">
            {/* <h1>This is the Sign In Page</h1>

            <button
            onClick={logGoogleUser}>
                Google SignIn With PopUp
                </button>
                <button
            onClick={signInWithGoogleRedirect}>
                Google SignIn With Redirect
                </button> */}
                <SignInForm/>
                <SignUpForm/>
        </div>
        
    )
}
export default Authentication;