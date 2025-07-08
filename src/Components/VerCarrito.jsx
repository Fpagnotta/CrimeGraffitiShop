import React, { useContext } from 'react'
import { CartContext } from '../Context/cartContext'
import { Link } from 'react-router-dom'


const VerCarrito = () => {
  const { cart, clear, removeItem } = useContext(CartContext)

  // calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="carrito-container">
      <h2 className="carrito-titulo">TU CARRITO:</h2>

      <div className="carrito-lista">
        {cart.map((compra) => (
          
            <div key={`${compra.id}-${compra.name}`}>
          <img src={compra.img} alt={compra.name} className="carrito-img" />
            <div className="carrito-info">
              <span className="nombre">{compra.name}</span>
              <span>${compra.price} PESOS</span><br />
              <span>Cantidad: {compra.quantity}</span><br />
              <span>Subtotal: ${compra.price * compra.quantity} PESOS</span><br />
            </div>
            <button
              className="btn btn-danger carrito-eliminar"
              onClick={() => removeItem(compra.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div className="carrito-total">
        <span>TOTAL: ${total}</span>
      </div>

      <div className="carrito-botones">
        <button className='btn btn-danger' onClick={clear}>VACIAR CARRITO</button>
        <Link className='btn btn-success' to='/checkout'>TERMINAR COMPRA</Link>
      </div>
    </div>
  )
}

export default VerCarrito