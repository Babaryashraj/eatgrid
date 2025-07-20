import { useState } from "react";
import "./navbar.css"


function Button(){

    const[menu,setMenu] = useState("Menu");
     
     return (
       <div className= 'navbar'>
        <img src="src/images/Grid.png" alt="" className="logo" />
        <ul className="navbar-menu">

          <li onClick={()=>setMenu("home")} className={menu=="home" ? "active" : ""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu=="Menu" ? "active" : ""}>Menu</li>
          <li onClick={()=>setMenu("Mobile-App")} className={menu=="Mobile-App" ? "active" : ""}>Mobile-App</li>
          <li onClick={()=>setMenu("Contact-Us")} className={menu=="Contact-Us" ? "active" : ""}>Contact-Us</li>

        </ul>
        <div className="navbar-right">
          <img src="src/images/search_icon.png" alt="" />
          <div className="navbar-search-icon">
            <img src="src/images/basket_icon.png" alt="" />
            <div className="dot"></div>
          </div>
          <button>sign in</button>
        </div>
    </div>
    
  
  
  )

}

export default Button;