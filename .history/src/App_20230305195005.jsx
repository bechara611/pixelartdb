
import { useState } from 'react'
import './App.css'
import { Pixel } from './Pixel'

const App=()=> {
const  [pixels, setPixels] = useState(
  Array.from({length:16*16})
)
const funcionArray=(index)=>{
  let nuevoArray = [...pixels]
  console.log(index)
 console.log(!nuevoArray[index])
}
const contenedor = document.getElementById('contenedor')
console.log(contenedor)
  return (
    <>
      <h1>pixel art</h1>

      <div className="contenedor" id='contenedor'>
      {
        pixels.map((a,index)=>{
          return <Pixel key={index}
                  funcion={()=>funcionArray(index)}
          ></Pixel>
        })
      }
    
      </div>
    </>
  )
}

export default App
