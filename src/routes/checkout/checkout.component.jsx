import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import'./checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout=() =>{
    const{cartItems,addItemToCart,removeItemFromCart,subItemToCart}=useContext(CartContext)
    let total=0
   
    return(
        <div className="checkout-container">
            <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Total</span></div>
                <div className="header-block"><span>Remove</span></div>  
            </div>
      
           {
            cartItems.map((item)=>{
                const{id}=item;
                total+=item.quantity*item.price;
                return(
                <CheckoutItem cartItem={item} key={id} handleRemove={()=>removeItemFromCart(item)}
                add={()=>addItemToCart(item)}
                sub={()=>subItemToCart(item)}/>
                
                )
            })
        }
        <span className="grandtotal">Grand Total:${total}</span>
       
        </div>
        
     
    )
}
export default Checkout;