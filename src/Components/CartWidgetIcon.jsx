import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { Badge } from "react-bootstrap";
import { TbHexagonNumber0Filled } from "react-icons/tb";


const CardWidgetIcon = () => {
    const {cantidadEnCarro} = useContext (cartContext)

return(
    <div>
<TbHexagonNumber0Filled />
<Badge bg="danger">{cantidadEnCarro()}</Badge>
    </div>
)
}