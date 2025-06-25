import React, { useContext } from 'react'
import { CartContext } from '../Context/cartContext'
import VacioCart from './vacioCart'
import VerCarrito from './verCarrito'




const CartContainer = () => {
    const {cart} = useContext(CartContext)
  return (
    <>
        {
            !cart.length ? <VacioCart/> : <VerCarrito/>
        }
    </>
  )
}

export default CartContainer