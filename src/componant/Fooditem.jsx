import React, { useState } from 'react'
import "./fooditem.css"

const Fooditem = ({id,name,price,description,image}) => {
   
  const [itemcount , setItemcount] = useState(0)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className = "food-item-img" src={image} alt="" />
              { !itemcount? <img className= 'add' onClick={()=>setItemcount(prev=>prev+1)} src = "src/images/add_icon_white.png" alt="" />:
              <div className='food-itemcount-Counter'>
                <img onClick={()=>setItemcount(prev=>prev-1)} src="src/images/remove_icon_red.png" alt="" />
                <p>{itemcount}</p>
                <img onClick={()=>setItemcount(prev=>prev+1)} src="src/images/add_icon_green.png" alt="" />
                </div>
                }

        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src= "src/images/rating_starts.png" alt="" />
            </div>
            <p className='food-item-des'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
       

      
    </div>
  )
}

export default Fooditem
