import React from 'react'

function Alert({mensaje, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>
      <h3>{mensaje}</h3>
    </div>
  )
}

export default Alert
