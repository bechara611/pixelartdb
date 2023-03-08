
import { useEffect, useState } from 'react'
import './App.css'
import { SelectableGroup } from 'react-selectable-fast'
import { Pixel } from './Pixel'

const App = () => {
  const [pixels, setPixels] = useState([])
  const [isSelecting, setIsSelecting] = useState(false)
  const [startIndex, setStartIndex] = useState(null)
  const [colorActual, setcolorActual] = useState('#2233cc')
  const [lapiz,setLapiz]= useState(true);

  useEffect(() => {
    let contenedor = document.getElementById('contenedor')
    let divsAloAlto = Math.floor(contenedor.offsetHeight / 20)
    let divsAlOancho = Math.floor(contenedor.offsetWidth / 20);
    //para saber cuantos divs necesita un contenedor multiplica el numero de divs a lo alto * el numero de divds a lo ancho
    setPixels(Array.from({ length: divsAloAlto * divsAlOancho }, () => { return { active: false, color: colorActual } }))

  }, [])
  const onReset = () => {
    let pixelesCopy = [];
    pixelesCopy = [...pixels]
    for (let i = 0; i < pixels.length; i++) {
      pixelesCopy[i] = { active: false, color: 'transparent' }
    }
    setPixels(pixelesCopy)
  }
  const funcionArray = (index) => {
    let nuevoArray = [...pixels]
    nuevoArray[index] = { active: true, color: colorActual }
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
      pixelsupdated[index] = { ...pixelsupdated[index], active: true, color: colorActual }

      setPixels(pixelsupdated)

    }
    // console.log('onMouseOver')
  }

  const onMouseUp2 = (index) => {
    setIsSelecting(false)

  }
  return (
    <>
      <div className="bg-dark fondo">
        <div className="col-12 contenedor-05 ">
          <div className="contenedor-mayor header">
            <h2 className='bg-primary'>Pixel Art</h2>

          </div>
        </div>
        <div className="contenedor-mayor ">
          <div className="contorno">
            <div className={`contenedor ${!lapiz ? 'cursorBorrador' : 'cursorLapiz'}`} id='contenedor'>

              {

                pixels.map((a, index) => {
                  return <Pixel key={index}
                    color={a.color}
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
        <div className="col-12 contenedor-05  ">
          <div className="derecha mt-2">
          <i className="fa-solid fa-pencil borrador" onClick={()=>{ setLapiz(true)
            setcolorActual('#2233cc')
            }}></i>
            <i className="fa-solid fa-eraser borrador" onClick={()=>{ setLapiz(false)
            setcolorActual('transparent')
            }}></i>
       
            <i className="fa-solid fa-arrow-rotate-right  icono" onClick={() => { onReset() }}></i>
            <input type="color" className='selector' value={colorActual} onChange={(e) => {
               setcolorActual(e.target.value)
               setLapiz(true)
              }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
