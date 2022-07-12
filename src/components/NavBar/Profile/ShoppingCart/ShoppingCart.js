import { AiOutlineShoppingCart } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import CartStyled from "./CartStyled";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../contexts/CartContext";

export const ShoppingCart = () => {
  const { functionContext } = useCartContext();

  return (
    <Tooltip
      title={
        functionContext.getQuantity() === 0
          ? "El carrito esta vacio"
          : functionContext.getQuantity() === 1
          ? "1 producto en el carrito"
          : `${functionContext.getQuantity()} productos en el carrito`
      }
      arrow
    >
      <CartStyled>
        <Link to="/shoppingList/">
          <AiOutlineShoppingCart />
          {functionContext.getQuantity() >= 1 ? (
            <p>{functionContext.getQuantity()}</p>
          ) : (
            ""
          )}
        </Link>
      </CartStyled>
    </Tooltip>
  );
};
