import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {

    const [menu, setMenu] = useState("Shop")
    const {getCartTotalItem} = useContext(ShopContext)
    return(
        <div className="navbar">
            <div className="navLogo">
                <img src={logo} alt=""/>
                <p>APS'S SHOP</p>
            </div>
            <ul className="navMenu">
                <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="Mens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="Womens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr />:<></>}</li>
            </ul>
            <div className="navLoginCart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon}/></Link>
                <div className="navCartCount">{getCartTotalItem()}</div>
            </div>
        </div>
    )
}
export default Navbar