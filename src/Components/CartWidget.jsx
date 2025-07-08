import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { Badge } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadEnCarro } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart" style={{ color: 'white', position: 'relative' }}>
        <FiShoppingCart size={50} />
        <Badge bg="danger" style={{ position: 'absolute', top: -5, right: -10 }}>
          {cantidadEnCarro()}
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
