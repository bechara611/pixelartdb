
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
let divsAloAlto = Math.floor(contenedor.offsetHeight/20)
let divsAlOancho = Math.floor(contenedor.offsetWidth/20);
//para saber cuantos divs necesita un contenedor multiplica el numero de divs a lo alto * el numero de divds a lo ancho
setPixels(Array.from({length:divsAloAlto*divsAlOancho},()=>false))
}, [])

const funcionArray=(index)=>{
  let nuevoArray = [...pixels]
  nuevoArray[index]=!nuevoArray[index]
  setPixels(nuevoArray)
}

  return (
    <>
    <div className="contenedor-mayor">
        <h2>Pixel Art</h2>
        </div>

    <div className="contenedor-mayor">
    
      <div className="contenedor" id='contenedor'>
      {
        pixels.map((a,index)=>{
          return <Pixel key={index}
                  funcion={()=>funcionArray(index)}
          ></Pixel>
        })
      }
    
      </div>
      </div>
    </>
  )
}

export default App
