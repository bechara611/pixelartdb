import React from 'react'
import './App.css'
export const pixel = () => {
    const [isActive, setisActive] = useState(false)
  return (
 <div className={`pixel ${isActive ? 'active' : ''}`}>
 
 </div>
  )
}
