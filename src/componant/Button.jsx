import { useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";


function Button(){

    const[menu,setMenu] = useState("Menu");
     
     return (
       <div className= 'navbar'>
        <img src="src/images/Grid.png" alt="" className="logo" />
        <ul className="navbar-menu">

          <Link to = '/' onClick={()=>setMenu("home")} className={menu=="home" ? "active" : ""}>Home</Link>
          <a href="#exploremenu" onClick={()=>setMenu("Menu")} className={menu=="Menu" ? "active" : ""}>Menu</a>
          <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu=="Mobile-App" ? "active" : ""}>Mobile-App</a>
          <a href="#footer" onClick={()=>setMenu("Contact-Us")} className={menu=="Contact-Us" ? "active" : ""}>Contact-Us</a>

        </ul>
        <div className="navbar-right">
          <img src="src/images/search_icon.png" alt="" />
          <div className="navbar-search-icon">
            <img src="src/images/basket_icon.png" alt="" />
            <div className="dot"></div>
          </div>
          <button >sign in</button>
        </div>
    </div>
    
  
  
  )

}

export default Button;