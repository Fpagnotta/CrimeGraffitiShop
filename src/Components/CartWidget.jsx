import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div className="cart-widget">
      <Link to="/cart" style={{ color: 'white' }}>
        <FiShoppingCart size={30} />
      </Link>
    </div>
  );
}

export default CartWidget;