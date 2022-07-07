import { AiOutlineShoppingCart } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = styled.div`
  position: relative;
  font-size: 24px;
  a {
    text-decoration: none;
    color: #bf3f43;
  }
  cursor: pointer;
  z-index: 1;
  p {
    position: absolute;
    bottom: 20px;
    left: 16px;
    font-size: 10px;
    background: #bf3f43;
    color: #fff;
    padding: 0.2rem 0.4rem;
    border-radius: 10px;
  }
`;

export const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
  console.log(
    shoppingCart === 0
      ? "no hay nada en el carrito"
      : `hay ${shoppingCart.length} productos en el carrito`
  );
  console.log(`lista de producto del carrito ${shoppingCart}`);
  return (
    /*Notificacion paraa agregar productos al carrito*/
    <Tooltip
      title={
        shoppingCart.length === 0
          ? "El carrito esta vacio"
          : shoppingCart.length === 1
          ? "1 producto en el carrito"
          : `${shoppingCart.length} productos en el carrito`
      }
      arrow
    >
      <Cart>
        <Link to="/shoppingList/">
          <AiOutlineShoppingCart />
          {shoppingCart.length >= 1 ? <p>{shoppingCart.length}</p> : ""}
        </Link>
      </Cart>
    </Tooltip>
  );
};
