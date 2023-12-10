import { Fragment, useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";
import { useParams } from "react-router-dom";
import "./product-preview.styles.scss"
const ProductPreview=()=>{
    const {category}=useParams()
    const {products}=useContext(ProductsContext)
    const[searchValue,setsearchValue]=useState("")
    const changeHandler=(event)=>{
        setsearchValue(event.target.value)   
    }

    let filteredList=[];
    (products[category])&& 
    (filteredList=products[category].filter((item)=>(item.name.toLocaleLowerCase()).includes(searchValue.toLocaleLowerCase())))

    return((products[category])?
        (<Fragment>
          <h2 className="preview-title">{category.toUpperCase()}</h2>
          <div className="search-box">
            <input type="text" placeholder={`Search ${category}`} value={searchValue} onChange={changeHandler}/>
          </div>
           <div  className="products-container">
              {
              (filteredList).map((product)=>{
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