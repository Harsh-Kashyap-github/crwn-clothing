import './checkout-item.styles.scss'

const CheckoutItem=({cartItem,handleRemove,add,sub})=>{
    const {name,imageUrl,price,quantity}=cartItem;
    return(
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <div className="arrow" onClick={sub}>
                  &#10094;
                </div>
                <span className='value'>
                {quantity}
                </span>
                
                <div className="arrow" onClick={add}>
                  &#10095;
                </div>
                
                </div>
            <div className="price">{price}</div>
            <div className="total">{price*quantity}</div>
            <div onClick={handleRemove} className="remove-button">&#10005;</div>
        </div>

    )
}
export default CheckoutItem;