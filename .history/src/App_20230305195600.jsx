
import { useEffect, useState } from 'react'
import './App.css'
import { Pixel } from './Pixel'

const App=()=> {
  const [tamano, settamano] = useState({
    t:10,
    h:10,
    w:10
  })
const  [pixels, setPixels] = useState(
  Array.from({length:tamano.h*tamano.w})
)

const funcionArray=(index)=>{
  let nuevoArray = [...pixels]
  console.log(index)
 console.log(!nuevoArray[index])
}
useEffect(() => {
  let contenedor = document.getElementById('contenedor')
  settamano({
    ...tamano,
    h:contenedor.offsetHeight/tamano.t,
    w:contenedor.offsetWidth/tamano.t
  })
}, [])


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
