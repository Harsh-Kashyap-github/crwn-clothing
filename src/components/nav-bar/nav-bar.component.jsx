import { Outlet,Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import "./nav-bar.styles.scss"
import { UserContext } from "../../contexts/user.context"
import { SignOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"

const NavBar=()=>{
    const {currentUser,setCurrentUser}=useContext(UserContext)
    const signOutHandler= async()=>{
        await SignOutUser();
        setCurrentUser(null)
    }
    const {setIsCartOpen,isCartOpen}=useContext(CartContext);

    return(
        <Fragment>  
            <div className="navigation">
                <Link className="logo-container"
                to="/"> 
                <div className="logo">
                    <CrwnLogo className="logo"/>
                    </div>
                </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">SHOP</Link>
                {
                    (currentUser)?
                      ( <Link className="nav-link" to="/auth" onClick={signOutHandler}>SIGN OUT</Link>):(<Link className="nav-link" to="/auth">SIGN IN</Link>)

                } 
                <div onClick={()=>{setIsCartOpen(!isCartOpen)}}>
                <CartIcon/>
                </div>
              
            </div>

            {
                (isCartOpen) && (<CartDropdown/>)
            }
               
            
            </div>
       
         <Outlet/> 
        </Fragment>

    )
}
export default NavBar