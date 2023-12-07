import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext,  useEffect} from 'react';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { CreateCartFromAuth, UpdateCartAtServer } from '../../utils/firebase/firebase.utils';
const CartIcon =() =>{
    const{cartItems,setCartItems}=useContext(CartContext)
    const {currentUser}=useContext(UserContext)
    
    
    const getCartDataFromServer=async()=>{
      let cartAtserver=await CreateCartFromAuth(currentUser,cartItems) 
      if(cartAtserver)
      {
        setCartItems(cartAtserver);  
      }
  
   
    }
   
    const cartDataUploadToServer=async()=>{ 
        if(currentUser){
            await UpdateCartAtServer(cartItems,currentUser) 
        }
    }

// setCurrentUser(currentUser);
useEffect(()=>{getCartDataFromServer()},[currentUser])
useEffect(()=>{cartDataUploadToServer();},[cartItems])



let totalItems=0
if(cartItems.length!==0)
{
    cartItems.map((item)=>totalItems+=item.quantity) 
}

return(
    <div className='cart-icon-container' >
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{totalItems}</span>
    </div>
)
}

export default CartIcon;