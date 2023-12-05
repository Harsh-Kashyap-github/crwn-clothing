import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
const CartIcon =() =>{
    const{cartItems}=useContext(CartContext)
    let totalItems=0
    cartItems.map((item)=>totalItems+=item.quantity)
return(
    <div className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{totalItems}</span>
    </div>
)
}

export default CartIcon;