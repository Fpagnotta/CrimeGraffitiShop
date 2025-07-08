import { useEffect, useState } from "react";
import { getProducts,Products } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../service/firebase";

const ItemListContainer = (props) => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();

//PRODUCTOS FIREBASE : 


useEffect (()=>{
    const productosFirebase = categoriaId
    ?query(collection (database,"ProductosGraffiti"),where("category","==",categoriaId))
    :
    collection (database,"ProductosGraffiti")
    getDocs (productosFirebase)
    .then((res)=>{
        const lista = res.docs.map((doc)=>{
            return {
                id:doc.id,
                ...doc.data()
            }
        })
        setData(lista)
    })
    .catch((error)=>console.log(error))
},[categoriaId])



    // PRODUCTOS USANDO MOCK : 
  //  useEffect(() => {
    //      getProducts()
     //     .then((respuesta) => {
       //       if (categoriaId) {
         //         setData(respuesta.filter(prod => prod.category.toLowerCase() === categoriaId.toLowerCase()));
        //      } else {
          //        setData(respuesta);
           //   }
         // })
        //  .catch((error) => console.log(error));
     // }, [categoriaId]);

    return (
        
        
        <div>
            <h1>{categoriaId ? categoriaId.toUpperCase() : props.inicio}</h1>
            <ItemList data={data} />
            
        </div>
    );
};

export default ItemListContainer;

