import { Fragment } from "react";
import CategoryList from "../category-list/category-list.component";
import "./directory.styles.scss"
const Directory=(props)=>{
    const {categories}=props
return(
    <div className="categories-container">
    {
      
        categories.map((category)=>{
        const {id,title,imageUrl}=category;
        return(
          <Fragment key={id}>
             <CategoryList 
         id={id}
         title={title}
         imageUrl={imageUrl}
         />
          </Fragment>
        
          
        )

      })
    } 

   </div>
)
}

export default Directory;