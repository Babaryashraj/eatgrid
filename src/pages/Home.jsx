import React, { useState } from 'react'
import "./home.css"
import Homeheader from '../componant/Homeheader'
import Exploremenu from '../componant/Exploremenu'
import Sliderhome from '../componant/Sliderhome'
import Displayfood from '../componant/Displayfood'
import Appdownload from '../componant/Appdownload'


const Home = () => {
   
  const[category , setCategory] = useState("All")

  return (
    <div>
      <Homeheader />
      <Sliderhome />
      <Exploremenu category = {category}  setCategory = {setCategory} />
      <Displayfood category={category}/>
      <Appdownload />

    </div>
  )
}

export default Home
