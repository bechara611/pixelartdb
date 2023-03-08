import React, { useState } from 'react'
import './App.css'
import {selectableGroup, createSelectable} from 'react-selectable-fast'
export const Pixel = (props) => {
    const [isActive, setisActive] = useState(false)
  return (
 
 <div className={`pixel ${props.active ? 'active' : ''}`} style={{ background:props.active ? props.color : ''}}
 onClick={()=>{
    setisActive(!isActive)
    props.funcion();
}}
onMouseDown={()=>{props.onMouseDown()}}
onMouseUp={()=>{props.onMouseUp()}}
onTouchEnd={()=>{props.onMouseUp()}}
onMouseOver={()=>{props.onMouseOver()}}
onTouchStart={()=>{{
    props.onMouseDown()
    props.onMouseOver()}}}
 >
 
 </div>
  )
}
