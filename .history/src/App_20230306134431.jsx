
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


  const onMouseOver2 = (index) => {
    if (isSelecting) {
      const pixelsupdated = [...pixels]
      pixelsupdated[index] = { ...pixelsupdated[index], active: !pixelsupdated[index].active }

      setPixels(pixelsupdated)

    }
    // console.log('onMouseOver')
  }
  const onMouseUp2 = (index) => {
    setIsSelecting(false)

  }
  return (
    <>
    <div className="bg-dark">
      <div className="contenedor-mayor">
        <h2 className='bg-primary'>Pixel Art</h2>
      </div>

      <div className="contenedor-mayor bg-dark">

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
      </div>
    </>
  )
}

export default App
