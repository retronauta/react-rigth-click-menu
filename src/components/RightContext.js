import React, { useState } from "react"
function RightContext() {
  // menu context
  const [context, setContext] = useState(false)
  // seteando posiciones x e y
  const [xYPosition, setXyPosition] = useState({ x: 0, y: 0 })

  const showNav = event => {
    //* previene que se renderize el menu del navegador
    event.preventDefault()
    setContext(false)
    //* determina la posicion del puntero del mouse en todo momento
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    }
    setXyPosition(positionChange)
    setContext(true)
  }

  //* me permite ocultar el menu context personalizado al hacer click
  const hideContext = () => {
    setContext(false)
  }

  const [chosen, setChosen] = React.useState()

  // setea el item elegido del menu personalizado
  const initMenu = chosen => {
    setChosen(chosen)
  }

  return (
    <>
      <h2 className="mb-3">React Right Click Context Menu Example</h2>
      <div
        className="contextContainer"
        // click derecho muestra menu personalizado
        onContextMenu={showNav}
        // click izquierdo esconde menu personalizado
        onClick={hideContext}
      >
        {chosen && <h1>"{chosen}" is chosen</h1>}

        {/* opciones del menu personalizado */}
        {context && (
          <div
            style={{ top: xYPosition.y, left: xYPosition.x }}
            className="rightClick"
          >
            <div className="menuElement" onClick={() => initMenu("prueba")}>
              prueba
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default RightContext
