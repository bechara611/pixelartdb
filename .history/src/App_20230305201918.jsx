
import { useEffect, useState } from 'react'
import './App.css'
import { Pixel } from './Pixel'

const App=()=> {
  const [tamano, settamano] = useState({
    t:10,
    h:1,
    w:1
  })
const  [pixels, setPixels] = useState([])

useEffect(() => {
  let contenedor = document.getElementById('contenedor')
console.log(contenedor.offsetHeight)
}, [])

const funcionArray=(index)=>{
  let nuevoArray = [...pixels]
  console.log(index)
 console.log(!nuevoArray[index])
}

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
