import Button from '../button/button.component'
import '../product-card/product-card.styles.scss'
const ProductCard=(props) =>{
const {product}=props
const {name,price,imageUrl}=product
return(
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button children={"ADD TO CART"} buttonType={"inverted"}/>
    </div>


)
}

export default ProductCard;