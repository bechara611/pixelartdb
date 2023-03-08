
import { useEffect, useState } from 'react'
import './App.css'
import { SelectableGroup } from 'react-selectable-fast'
import { Pixel } from './Pixel'

const App=()=> {
const  [pixels, setPixels] = useState([])

useEffect(() => {
  let contenedor = document.getElementById('contenedor')
let divsAloAlto = Math.floor(contenedor.offsetHeight/20)
let divsAlOancho = Math.floor(contenedor.offsetWidth/20);
//para saber cuantos divs necesita un contenedor multiplica el numero de divs a lo alto * el numero de divds a lo ancho
setPixels(Array.from({length:divsAloAlto*divsAlOancho},()=>{return {active:false,color:'green'}}))

}, [])

const funcionArray=(index)=>{
  let nuevoArray = [...pixels]
  nuevoArray[index]={active:!nuevoArray[index].active,color:'blue'}
  setPixels(nuevoArray)
}
const funcionParaVarios=(selectedItems)=>{
  console.log('entro')
  console.log(selectedItems)
  const pixelsupdated= [...pixels]
  for(let i = 0; i<pixelsupdated.length.length;i++){
    pixelsupdated[i]={...pixelsupdated,active:selectedItems.includes(i)}
  }
  setPixels(pixelsupdated)
}
useEffect(()=>{
  console.log({pixels})
},[pixels])

  return (
    <>
  
    <div className="contenedor-mayor">
        <h2>Pixel Art</h2>
        </div>

    <div className="contenedor-mayor">
    <SelectableGroup onSelectionFinish={(selectedItems)=>{funcionParaVarios(selectedItems)}}>
      <div className="contenedor" id='contenedor'>
    
      {
     
        pixels.map((a,index)=>{
          return <Pixel key={index}
                  funcion={()=>funcionArray(index)}
          ></Pixel>
        })

      }

      </div>
      </SelectableGroup>
      </div>
  
    </>
  )
}

export default App
