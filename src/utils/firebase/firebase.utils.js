import {initializeApp} from 'firebase/app';
import {getAuth,
signInWithPopup,
signInWithRedirect,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth'
import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC0Ph15jL0VyCUHdTnhpMrW41jR9Ba5cQQ",
    authDomain: "crwn-clothing-db-3a955.firebaseapp.com",
    projectId: "crwn-clothing-db-3a955",
    storageBucket: "crwn-clothing-db-3a955.appspot.com",
    messagingSenderId: "839973780222",
    appId: "1:839973780222:web:4d62f7489ce801ec0cc3af"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider=new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);
  export const db=getFirestore();

  export const creatUserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
    const userDocRef=doc(db,'users',userAuth.uid)
    // console.log(userDocRef);

    const userSnapshot= await getDoc(userDocRef);
    // console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists())
    {
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }catch(error){
            console.log(error.message ,"error creating the user")
        }
    } 
    return userDocRef;
    
    //if user data exists
    //return data
    //if user data does not exist
    //create/set the document with data from userAuth
};


export const CreateCartFromAuth= async(userAuth,cartItems)=>{
    try{
        const CartRef= doc(db,"cart",userAuth.uid);
        const cartSnapshot=await getDoc(CartRef);
        // console.log("cart",cartSnapshot.exists());
        if(!cartSnapshot.exists())
        {
            setDoc(CartRef,{cartItems})
            return null;
        }
        else{
            return cartSnapshot.data()["cartItems"]
        }
    }catch(error)
    {
        console.log("Cant get CartData");
        return null;
    }
    
    }

export const UpdateCartAtServer=async(cartItems,userAuth)=>{
    try{
        const CartRef=doc(db,"cart",userAuth.uid);
        await setDoc(CartRef,{cartItems})
    }catch(error)
    {
        console.log("Cant Update CartData");
    }
     
   
}


// export const uploadShopDatainServer=(SHOP_DATA)=>{
//     SHOP_DATA.map(async (category)=>{
//         const DocRef=doc(db,"Categories",category.title)
//         await setDoc(DocRef,category)
//     })
//     return null;

// }
export const getShopDataFromServer=async()=>
{
  const collectionRef=collection(db,"Categories")
  const q=query(collectionRef)
  const querySnapshot=await getDocs(q)
 const categoryMap=querySnapshot.docs.reduce((acc,docSnapshot)=>{
    // console.log(docSnapshot.id);
    const {title,items}=docSnapshot.data();
    acc[title.toLowerCase()]=items;
    return acc;
 },{})
 
 console.log(categoryMap);
 return categoryMap;
 
}

export const createAuthUserWithEmailAndPassword =async(email,password) =>{
   return await createUserWithEmailAndPassword(auth,email,password);

}

export const SignInAuthWithEmailAndPassword= async (email,password) =>{
    return await signInWithEmailAndPassword(auth,email,password)
}

export const SignOutUser= async () =>await (signOut(auth))

export const onAuthStateChangedListener=(callback) =>{ 
    onAuthStateChanged(auth,callback)
    // console.log("auth",auth);

}