import React, { useState } from 'react'
import './App.css'
import {selectableGroup, createSelectable} from 'react-selectable-fast'
export const Pixel = createSelectable(props => {
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
})
