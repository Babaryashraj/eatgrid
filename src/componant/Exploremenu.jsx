import React from 'react';
import './exploremenu.css';
import { menu_list } from '../images/assets'; 

function Exploremenu({category , setCategory}) {
  return (
    
     

    <div className='exploremenu' id='exploremenu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose the menu from the given & Enjoy the Food.
      </p>

      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div onClick = {()=>setCategory(prev=>prev === item.menu_name?"All":item.menu_name)}  className='explore-menu-list-item' key={index}>
            <img className= {category === item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
    
  );
}

export default Exploremenu;
