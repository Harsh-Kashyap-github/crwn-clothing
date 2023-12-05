import { useState } from "react";
import { createContext } from "react";

const addCartItems=(cartItems,productToAdd)=>{
    let isPresent=false;
  let newcartItems= cartItems.map((item)=>{
        if(item.id===productToAdd.id)
        {
            isPresent=true;
            return {...item,quantity:(item.quantity+1)}
            
        }
        return item;
    })

    if(isPresent)
    {
       
       return newcartItems;
    }
    else
    {
        return [...cartItems,{...productToAdd,quantity:1}];
    }
}


const removeCartItems=(cartItems,productToRemove)=>{
    return cartItems.filter((item)=>{
         return item.id!==productToRemove.id
     })
 }


 const subCartItems=(cartItems,productToSub)=>{
    let toRemove=false
   let updatedCartitems= cartItems.map((item)=>{
    
        if(item.id===productToSub.id)
        {
            if(productToSub.quantity-1>0)
            {
                return{...productToSub,quantity:productToSub.quantity-1}
            }
            else{
                toRemove=true
                return item;
            }
        }
        else{
            return item;
        }
    })
    if(toRemove)
    {
        return removeCartItems(cartItems,productToSub);
    }
    else{
        return updatedCartitems;
    }
 }



export const CartContext=createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    subItemToCart:()=>{},
    setCartItems:()=>{}
})

export const CartProvider=({children})=>{
    const [isCartOpen,setIsCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);

    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItems(cartItems,productToAdd));
    }
    const removeItemFromCart=(productToRemove)=>{
        setCartItems(removeCartItems(cartItems,productToRemove));
    }
    const subItemToCart=(productToSub)=>{
        setCartItems(subCartItems(cartItems,productToSub))
    }

    const value={isCartOpen,setIsCartOpen,addItemToCart,cartItems,removeItemFromCart,subItemToCart}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}