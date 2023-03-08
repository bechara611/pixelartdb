
import { useState } from 'react'
import './App.css'
import { Pixel } from './Pixel'

const App=()=> {
const  [pixels, setPixels] = useState(
  Array.from({length:16*16})
)

  return (
    <>
      <h1>pixel art</h1>

      <div className="contenedor">
      {
        pixels.map((a,index)=>{
          return <Pixel key={index}></Pixel>
        })
      }
      <Pixel></Pixel>
      </div>
    </>
  )
}

export default App
