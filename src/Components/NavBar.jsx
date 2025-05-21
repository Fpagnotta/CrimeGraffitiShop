import CartWidget from "./CartWidget"

const NavBar = () => {

    return(
        <nav>
            <a href="">INICIO</a>
            <a href="">AEROSOLES</a>
            <a href="">MARKERS</a>
            <a href="">LO MAS VENDIDO</a>
            <a href="">OFERTAS</a>
            <CartWidget/> 
        </nav>
    )
}

export default NavBar