import ItemListContainer from './Components/ItemListContainer'
import './App.css'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer'


function App() {
 

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer inicio="DESCUBRE NUESTROS PRODUCTOS" />}/>
      <Route path='/ofertas' element={<h1>¡Ofertas próximamente!</h1>} />
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
