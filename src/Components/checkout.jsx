import React, { useState,useContext } from 'react'
import { CartContext } from '../Context/cartContext'
import { addDoc, serverTimestamp,collection } from 'firebase/firestore'
import { database } from '../../service/firebase'





function Checkout() {
    const [buyer, setBuyer] = useState ({})
    const [validMail,setValidMail] = useState ('')
    const {cart,totalPagar,clear}=useContext(CartContext)
    const [orderId,setOrderId] = useState('')

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }
const terminarCompra = (e) => {
    e.preventDefault()
    if(!buyer.name || !buyer.lastname || !buyer.email || !buyer.address){
        alert("HAY CAMPOS INCOMPLETOS, COMPLETAR PARA TERMINAR LA ORDEN!")
    }else if (buyer.mail!==validMail){
        alert("LOS EMAILS NO COINCIDEN")
    }else{
    
    let orden = {
        comprador:buyer,
        compras:cart,
        total:totalPagar(),
        fecha:serverTimestamp()
    }
    const ventas = collection(database,"ordenes")
    addDoc(ventas,orden)
    .then((res)=>{
        setOrderId(res.id)
        clear()    })
    .catch((error)=>console.log(error))}
}





return (
   <>
   {
    orderId 
    ?<div>
        <h1>LISTO!! YA INGRESO TU PEDIDO, TE ESTAREMOS CONTACTANDO PARA LA ENTREGA</h1>
        <h2>TU PEDIDO ES: {orderId}</h2>
    </div>
    : <div>
        <h1>COMPLETAR FORMULARIO</h1>
        <form onSubmit={terminarCompra}>
            <input className='form-control' type='text' name='name' placeholder='INGRESA TU NOMBRE' onChange={buyerData}/>
              <input className='form-control' type='text' name='lastname' placeholder='INGRESA TU APELLIDO' onChange={buyerData}/>
                <input className='form-control' type='text' name='address' placeholder='INGRESA TU DIRECCION' onChange={buyerData}/>
                  <input className='form-control' type='email' name='email' placeholder='CUAL ES TU CORREO?' onChange={buyerData}/>
                  <input className='form-control' type='email' name='second-email' placeholder='REPITE TU CORREO' onChange={(e)=> setValidMail(e.target.value)}/>
            <button className='btn btn-success' type='submit'>TERMINAR COMPRA</button>
        </form>
    </div>
   }
   </>
  )
}

export default Checkout