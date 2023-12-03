import { SignInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import'../sign-in-form/sign-in-form.styles.scss'
import Button from "../button/button.component";
import {  useState } from "react";
import FormInput from "../form-input/form-input.component";
// import { UserContext } from '../../contexts/user.context';
// import { useContext } from 'react';

import { signInWithGooglePopup,
    creatUserDocumentFromAuth,
    } from "../../utils/firebase/firebase.utils";

const SignInForm=() =>{
    // console.log("SignInForm Function Runs");
    // useEffect(()=>{
    //     console.log("SihnInForm UseEffect Runs")
    // },[])

    const defaultFormField={
        
        email:'',
        password:'',
       
    };
   

    const [FormFields,setFormFields]=useState(defaultFormField);
    // const {setCurrentUser}=useContext(UserContext);

    

    const {email,password}=FormFields;

    const UpdateFormField=(event) =>{
        const{name,value}=event.target;
        setFormFields({...FormFields,[name]:value}) // This sync fucn program move forward before completing this thats why one log dosnt show real time value one tick slow.
        console.log(FormFields)
    }
    const handelSubmit= async(event) =>{
       event.preventDefault();
      
       try{
        const response= await SignInAuthWithEmailAndPassword(email,password);
        console.log(response);
        // setCurrentUser(response);
        setFormFields(defaultFormField);
        alert("Succesfully Signed In")
        
       }catch(error){
        if(error.code==="auth/invalid-credential")
        {
            alert("Invalid Email or Password")
        }
        
        else{
        console.log(error);
        }
       }


    }

    const SignInWithGoogle=async ()=>{
        const {user}=await signInWithGooglePopup();
        // const userDocRef=await creatUserDocumentFromAuth(user);
        // console.log(user,userDocRef);
        // setCurrentUser(user);
        alert("Succesfully Signed In")
        // console.log("You SignedIn Using Google");
    };


    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handelSubmit}>
                

                <FormInput label="Email" 
                
                type="email" 
                name="email" 
                onChange={UpdateFormField} 
                value={email}
                required/>

                <FormInput label="Password" 
                
                type="password" 
                name="password" 
                onChange={UpdateFormField} 
                value={password}
                required/>
               
                <div className="buttons-container">
                        <Button children={"Sign In"}  type="submit" onClick={handelSubmit}/>
                        <Button children={"Google SignIn"} type="button" buttonType="google" onClick={SignInWithGoogle}/>
                </div>
                
              
            </form>
        </div>
    )
}

export default SignInForm;
