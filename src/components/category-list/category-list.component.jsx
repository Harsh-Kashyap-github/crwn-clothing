import './category-list.styles.scss'
const CategoryList=(props)=>{
    const {id,title,imageUrl}=props;
    return(
        <div key={id} className="category-container">

        <div className="background-image"
            style={{
              backgroundImage:`url(${imageUrl})`
             }}>
      
          </div>
       
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>

      
    </div>
    )

    
}
export default CategoryList