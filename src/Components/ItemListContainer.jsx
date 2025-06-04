import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"

const ItemListContainer = (props) => {
    const [data,setData] = useState ([])
    useEffect(()=>{
        getProducts()
        .then((respuesta)=> setData(respuesta))
        .catch((error)=> console.log(error))
    },[])
    console.log(data)

    return(
    <div>
        <h1>{props.inicio}</h1>
    </div>
    )
}
export default ItemListContainer