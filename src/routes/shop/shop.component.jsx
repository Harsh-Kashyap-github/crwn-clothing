import { Fragment, useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import '../shop/shop.styles.scss'
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductPreview from "../../components/product-preview/product-preview.component";
const Shop=()=>{
    console.log("Shop rendered");
    const navigate=useNavigate()
    const {products}=useContext(ProductsContext)
    // console.log(products);
    return(
        <Routes>
            
            <Route index element={
                <Fragment>
                {
                    
                    Object.keys(products).map((title)=>{
                        return(
                            <Fragment key={title}>
                            <h2 className="product-title" onClick={()=>navigate(`${title}`)}>{title.toUpperCase()}</h2>
                             <div  className="products-container">
                                
                                {
                                products[title].slice(0,Math.min(4,products[title].length)).map((product)=>{
                                const{id}=product
                                return(
                               <ProductCard key={id} product={product}/>
                               )})}
                               </div>
                               
                            </Fragment>
                        )
                            
                           
                    })
                }
        
                
            </Fragment>
            }/>
            
            <Route path=":category" element={<ProductPreview/>}/>
        </Routes>
       
       
    )
}

export default Shop;