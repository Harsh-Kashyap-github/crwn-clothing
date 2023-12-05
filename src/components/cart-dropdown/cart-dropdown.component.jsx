import { useContext } from 'react';
import Button from '../button/button.component'
import'./cart-dropdown.styles.scss'
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
const CartDropdown=() =>{
    const {cartItems}=useContext(CartContext)
    const nav=useNavigate();
  


    return(
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {
                   cartItems.map(item=><CartItem key ={item.id} cartItem={item}/>)
                }
            </div>
            <Button onClick={()=>(nav("/checkout"))} children={"GO TO CHECKOUT"} />
            

        </div>
    );

};

export default CartDropdown