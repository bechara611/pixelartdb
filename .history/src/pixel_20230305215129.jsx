import React, { useState } from 'react'
import './App.css'
export const Pixel = (props) => {
    const [isActive, setisActive] = useState(false)
  return (
 
 <div className={`pixel ${isActive ? 'active' : ''}`} 
 onClick={()=>{
    setisActive(!isActive)
    props.funcion();
}}
 >
 
 </div>
  )
}
