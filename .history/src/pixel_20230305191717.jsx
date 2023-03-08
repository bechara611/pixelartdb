import React from 'react'

export const pixel = () => {
    const [isActive, setisActive] = useState(false)
  return (
 <div className={`pixel ${isActive ? 'active' : ''}`}>
 
 </div>
  )
}
