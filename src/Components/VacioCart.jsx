import React from 'react'
import { Link } from 'react-router-dom'

const VacioCart = () => {
  return (
    <div>
        <h2>TU CARRITO NECESITA QUE LO LLENES!!</h2>
        <Link className='btn btn-dark' to='/'>VOLVER</Link>
    </div>
  )
}

export default VacioCart