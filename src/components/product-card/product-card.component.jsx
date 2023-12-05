import { useContext } from 'react'
import Button from '../button/button.component'
import '../product-card/product-card.styles.scss'
import { CartContext } from '../../contexts/cart.context'
const ProductCard=(props) =>{
const {product}=props
const {name,price,imageUrl}=product
const {addItemToCart}=useContext(CartContext)
const addProductToCart=()=>{addItemToCart(product)}
return(
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        
        <Button onClick={addProductToCart} buttonType={"inverted"}>"ADD TO CART"</Button>
        
       
    </div>


)
}

export default ProductCard;