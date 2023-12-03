import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import '../shop/shop.styles.scss'
const Shop=()=>{
    let products=useContext(ProductsContext).products
    return(
        <div className="products-container">
            {
            products.map((product)=>{
            const{id}=product
            return(
                <ProductCard key={id} product={product}/>
        )
       })
       }
        </div>
       
    )
}

export default Shop;