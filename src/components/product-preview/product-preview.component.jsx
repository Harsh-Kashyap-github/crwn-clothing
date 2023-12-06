import { Fragment, useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import { useParams } from "react-router-dom";
import "./product-preview.styles.scss"
const ProductPreview=()=>{
    const {category}=useParams()
    const {products}=useContext(ProductsContext)
    console.log(category);
    // console.log(products);
    
    return((products[category])?
        (<Fragment>
          <h2 className="preview-title">{category.toUpperCase()}</h2>
           <div  className="products-container">
              {
              products[category].map((product)=>{
              const{id}=product
              return(
             <ProductCard key={id} product={product}/>
             )})}
             </div>
    </Fragment>)
    :(<>Loading data...</>)
    )
}

export default ProductPreview;