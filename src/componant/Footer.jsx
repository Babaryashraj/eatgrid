import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src="src/images/Grid.png" alt="" />
               <h1>EATGRID </h1>
        
              <p>  this is EATGRID where we serve all the dishes what you want from the heart , i hope you enjoy it , prime goal the EATGRID is to make easy to accesss all posibles food with verities at one platform for you thats it.</p>
              <div className="foot-icon">
                <img src="src/images/facebook_icon.png" alt="" />
                <img src="src/images/twitter_icon.png" alt="" />
                <img src="src/images/linkedin_icon.png" alt="" />
              </div>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
               
               <ul>
                <li>+91 9284911954</li>
                <li>yashrajbabar777@gmail.com</li>
                <li>@yashraj_02</li>
               </ul>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Privacy policy</li>
               </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>thanks for visiting my website .I hope you enjoyed it .</p>
      </div>
  )
}

export default Footer
