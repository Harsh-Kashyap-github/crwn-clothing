import { createContext,useEffect,useState } from "react";
// import { PRODUCTS } from "../utils/shop-data";
import { getShopDataFromServer } from "../utils/firebase/firebase.utils";
// import { SHOP_DATA } from "../utils/new_shop_data";
// import { uploadShopDatainServer } from "../utils/firebase/firebase.utils";


export const ProductsContext=createContext({
    products:[],
    setProducts:()=>[]
})

export const ProductsProvider =({children}) =>{
   const [products,setProducts]=useState([]);
   let value={products,setProducts}
//    useEffect(()=>{
//     uploadShopDatainServer(SHOP_DATA);

//    },[])
console.log("Context Rendered");
useEffect(()=> async ()=>{
    console.log("Trying to get data from the server!!");
   setProducts( await getShopDataFromServer())
   console.log("Got data from the server!!");
},[])

   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>

}