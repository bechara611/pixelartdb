
import { useEffect, useState } from 'react'
import './App.css'
import { SelectableGroup } from 'react-selectable-fast'
import { Pixel } from './Pixel'

const App = () => {
  const [pixels, setPixels] = useState([])
  const [isSelecting, setIsSelecting] = useState(false)
  const [startIndex, setStartIndex] = useState(null)

  useEffect(() => {
    let contenedor = document.getElementById('contenedor')
    let divsAloAlto = Math.floor(contenedor.offsetHeight / 20)
    let divsAlOancho = Math.floor(contenedor.offsetWidth / 20);
    //para saber cuantos divs necesita un contenedor multiplica el numero de divs a lo alto * el numero de divds a lo ancho
    setPixels(Array.from({ length: divsAloAlto * divsAlOancho }, () => { return { active: false, color: 'green' } }))

  }, [])

  const funcionArray = (index) => {
    let nuevoArray = [...pixels]
    nuevoArray[index] = { active: !nuevoArray[index].active, color: 'blue' }
    setPixels(nuevoArray)
  }

  useEffect(() => {
    //console.log({ pixels })
  }, [pixels])

  const onMouseDown = (index) => {
    setIsSelecting(true);
    setStartIndex(index)
   // console.log('onMouseDown')
  }
  const onMouseUp = (index) => {
    setIsSelecting(false)
    if (startIndex !== null && index !== startIndex) {
     const start = Math.min(startIndex, index)
     const end = Math.max(startIndex, index)
      const pixelsupdated = [...pixels]
      for (let i = start; i < end; i++) {
        pixelsupdated[i] = { ...pixelsupdated[i], active: !pixelsupdated[i].active}
      }
      setPixels(pixelsupdated)
    }
    setStartIndex(false)
//    console.log('onMouseUp')
  }
  const onMouseOver = (index) => {
    if(isSelecting && startIndex!==null && index!==startIndex){
     const start = Math.min(startIndex, index)
     const end = Math.max(startIndex, index)
      const pixelsupdated = [...pixels]
      for (let i = start; i < end; i++) {
        pixelsupdated[i] = { ...pixelsupdated[i], active:!pixelsupdated[i].active }
      }
      setPixels(pixelsupdated)
      setStartIndex(index)
    }
   // console.log('onMouseOver')
  }

  const onMouseOver2 = (index) => {
    if(isSelecting){
        const pixelsupdated = [...pixels]
        pixelsupdated[index] = { ...pixelsupdated[index], active:!pixelsupdated[index].active }
    
      setPixels(pixelsupdated)

    }
   // console.log('onMouseOver')
  }
  const onMouseUp2 = (index) => {
    setIsSelecting(false)
   
  }
  return (
    <>

      <div className="contenedor-mayor">
        <h2>Pixel Art</h2>
      </div>

      <div className="contenedor-mayor">

        <div className="contenedor" id='contenedor'>

          {

            pixels.map((a, index) => {
              return <Pixel key={index}
              active={a.active}
                funcion={() => funcionArray(index)}
                onMouseDown={() => { onMouseDown(index) }}
                onMouseUp={() => { onMouseUp2(index) }}
                onMouseOver={() => { onMouseOver2(index) }}
              ></Pixel>
            })

          }

        </div>

      </div>

    </>
  )
}

export default App
