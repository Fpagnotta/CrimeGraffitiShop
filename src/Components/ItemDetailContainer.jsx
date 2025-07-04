import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { database } from '../../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const { itemId } = useParams()
    const [invalid,setInvalid] = useState(false) 
//PRODUCTOS CON FIREBASE:

useEffect (()=>{
    const productosFirebase2  = collection (database,"ProductosGraffiti")
    const docRef = doc(productosFirebase2,itemId)
    getDoc(docRef)
    .then((res)=>{
        if(res.data()){
            setDetalle({itemId:res.itemId,...res.data()})
        }else{
            setInvalid(true)
        }
    })
    .catch((error)=>console.log(error))
},[])





//PRODUCTOS CON MOCK

  //  useEffect(() => {
  //      getOneProduct(itemId)
  //        .then((res) => setDetalle(res))
  //        .catch((error) => console.log(error))
  //  }, [itemId])

  if(invalid){
    return <div>
        <h1>EL PRODUCTO ES INEXISTENTE, VUELVE AL INICIO!!</h1>
        <Link to='/' className='btn-btn-danger'>VOLVER</Link>
    </div>

  }

    return (
        <>
            <ItemDetail detalle={detalle} />
        </>
    )
}

export default ItemDetailContainer