import Button from "../button/button.component";
import { useState } from "react";
import { creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "../sign-up-form/sign-up-form.styles.scss"
import FormInput from "../form-input/form-input.component";
// import { UserContext } from "../../contexts/user.context";
// import { useContext } from "react";
const SignUpForm=()=>{
    const defaultFormField={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    };

    const [FormFields,setFormFields]=useState(defaultFormField);
    // const {setCurrentUser}=useContext(UserContext);

    const {displayName,email,password,confirmPassword}=FormFields;
    const UpdateFormField=(event) =>{
        const{name,value}=event.target;
        setFormFields({...FormFields,[name]:value}) // This sync fucn program move forward before completing this thats why one log dosnt show real time value one tick slow.
        console.log(FormFields)
    }
    const handelSubmit= async(event) =>{
       event.preventDefault();
       if(password!== confirmPassword)
       {
        alert("Password doesnt match");
        return ;
       }
       try{
        const {user}=await createAuthUserWithEmailAndPassword(email,password);
        
        await creatUserDocumentFromAuth(user,{displayName})
        setFormFields(defaultFormField);
        // setCurrentUser(user);
        alert("User signUp Succesful");
        
        
       }catch(error){
        if(error.code==='auth/email-already-in-use')
        {
            alert("Cannot create user,email already in use");
        }
        else if (error.code==='auth/weak-password')
        {
            alert("Password should be at least 6 characters ")
        }
        else{
        console.log(error,"User creation encountered error")
        }
       }


    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handelSubmit}>
                <FormInput label="Display Name" 
                
                type="text" 
                name="displayName" 
                onChange={UpdateFormField} 
                value={displayName}
                required/>

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

               <FormInput label="Confirm Password" 
            
                type="password" 
                name="confirmPassword" 
                onChange={UpdateFormField} 
                value={confirmPassword}
                required/>
                
                
                <Button children={"Sign Up"}  type="submit" onClick={handelSubmit}/>
            </form>
        </div>
    )
}
export default SignUpForm;