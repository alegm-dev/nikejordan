import { AiOutlineShoppingCart } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import CartStyled from "./CartStyled";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../contexts/CartContext";

export const ShoppingCart = () => {
  const { functionContext } = useCartContext();
  const { getQuantity } = functionContext;

  return (
    <Tooltip
      title={
        getQuantity() === 0
          ? "El carrito esta vacio"
          : getQuantity() === 1
          ? "1 producto en el carrito"
          : `${getQuantity()} productos en el carrito`
      }
      arrow
    >
      <CartStyled>
        <Link to="/shoppingList/">
          <AiOutlineShoppingCart />
          {getQuantity() >= 1 ? <p>{getQuantity()}</p> : ""}
        </Link>
      </CartStyled>
    </Tooltip>
  );
};
