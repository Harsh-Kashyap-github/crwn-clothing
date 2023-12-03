import { createContext, useState } from "react";
import { PRODUCTS } from "../utils/shop-data";


export const ProductsContext=createContext({
    products:[],
    setProducts:() =>(null)
})

export const ProductsProvider =({children}) =>{
   const [products,setProducts]=useState(PRODUCTS);
   let value={products,setProducts}

   return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>

}