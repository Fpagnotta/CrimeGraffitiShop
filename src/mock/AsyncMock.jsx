
const Products = [
    {
        id :"a01",
        name:"LOOP 400ML",
        price:6000,
        description:"UNA DE LAS MEJORES MARCAS EN NUESTRO TERRITORIO,MADE IN ITALY,EXPORT TO BAIRES CITY",
        category:"AEROSOLES",
        stock:200,
        tipo:"Brillante/Mate",
        img:"/loop400.JPG"
    },
    {
        id :"a02",
        name:"KWT 440ML",
        price:4500,
        description:"LA MARCA NUMERO 1 DE NUESTRO PAIS, MAS DE 60 COLORES A DISPOSICION",
        category:"AEROSOLES",
        stock:500,
        tipo:"Brillante",
        img:"/kwtpremium.JPG"
    },
    {
        id :"a03",
        name:"MTN 400ML",
        price:8000,
        description:"LA INDISCUTIBLE Y PIONERA DESDE SIEMPRE, AUNQUE NO ESTE EN EL CORAZON DE MUCHOS, SIGUE SIENDO DE LAS MEJORES. SOLO DISPONEMOS BASE BRILLANTE.",
        category:"AEROSOLES",
        stock:150,
        tipo:"Brillante",
        img:"/mtn400.JPG"
    },
    {
        id :"m01",
        name:"PAINT MARKERS 15MM - LOOP",
        price:3000,
        description:"MARCADOR LOOP 15MM PINTURA BASE SINTETICA, VARIOS COLORES",
        category:"MARKERS",
        stock:50,
        tipo:"Punta solida",
        img:"/loopmarker.JPG"
    },
    {
        id :"m02",
        name:"MOPR 19MM - POSCA ",
        price:5000,
        description:"MARCADOR TIPO SQUEEZER MARCA POSCA PUNTA REDONDA, DISPONIBLE EN SOLO 3 COLORES, NEGRO , ROJO Y CROMO",
        category:"MARKERS",
        stock:50,
        tipo:"Mop",
        img:"/poscamopr.JPG"
    },
    {
        id :"m03",
        name:"MARKER 4MM - UNI PAINT",
        price:2500,
        description:"MARCADOR PUNTA MEDIA PARA A LOS QUE NO LES GUSTA SER TAN AGRESIVOS,BASE DE ACEITE, RECOMENDADISIMO, TODOS LOS COLORES!",
        category:"MARKERS",
        stock:50,
        tipo:"Punta solida",
        img:"/unipaintmarker.JPG"
    },
    {
        id :"c01",
        name:"SKYNNY BANANA",
        price:300,
        description:"SKYNNY BANANA UNIVERSAL LI, TRAZO FINO, TRAZO CLASICO",
        category:"CAPS",
        stock:1000,
        tipo:"Fino",
        img:"/skynnybannana.JPG"
    },
    {
        id :"c02",
        name:"HARDCORE FAT",
        price:300,
        description:"ORANGE HARDCORE FAT, ULTRA ANCHO, ESPECIALMENTE PARA EL CROMO...",
        category:"CAPS",
        stock:1000,
        tipo:"Ancho",
        img:"/fat.JPG"
    },
    {
        id :"c03",
        name:"LEGO CAP",
        price:300,
        description:"CAP LEGO, SIN MARCA, TRAZO MEDIO Y SOLIDO, YA NO SE FABRICAN, TENEMOS PARTE DE LOS ULTIMOS!!",
        category:"CAPS",
        stock:1000,
        tipo:"Medio Fino",
        img:"/legocap.JPG"
    },
]

let Falla = false
export const getProducts = () => {
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        if(Falla){
            reject("Lo siento, hay un error en el sistema, no pude cargar los datos")
        }
        else{
            resolve(Products)
        }
    },1000)
})}


export const getOneProduct = (itemId) => {
  return new Promise((resolve, reject) => {
    const productoEncontrado = Products.find((p) => p.id === itemId); // <--- ¡ARREGLADO!
    setTimeout(() => {
      if (productoEncontrado) {
        resolve(productoEncontrado);
      } else {
        reject("Producto no encontrado");
      }
    }, 500);
  });
};


