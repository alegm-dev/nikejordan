import styled from "styled-components";
import Button from "../../../../StyledDefault/Button";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ButtonStyled = styled(Button)`
  width: 90%;
  margin: auto;
  background: ${(props) => (props.stock === 0 ? "brown" : "green")};
  pointer-events: ${(props) => (props.stock === 0 ? "none" : "auto")};
  color: #fff;
  margin-bottom: 0.5rem;
  border: none;
  .Go-cart {
    position: initial;
    background: transparent;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const AddProduct = ({
  stock,
  numCounter,
  btnAddProduct,
  setBtnAddProduct,
  shoppingCart,
  setShoppingCart,
  counterProduct,
}) => {
  //Renderiza el boton finalizar compra
  const finishShop = () => {
    setTimeout(() => {
      setBtnAddProduct(true);
    }, 800);
  };

  //Notifica cuanto elemento se agregaron al carrito
  const notify = () => {
    if (numCounter === 0) {
      toast("Seleccionar minimo 1 unidad", {
        icon: "❗",
        id: "noProduct",
        duration: 2000,
      });
    } else if (numCounter > 0) {
      toast.success(
        `${
          numCounter === 1
            ? `Se agrego ${numCounter} producto`
            : `Se agregaron ${numCounter} productos`
        } al carrito!`,
        { id: "product", duration: 2000 }
      );
      finishShop();
      addproductsCart();
    }
  };

  //Funcion que muestra cuantos elementos tiene el carrito
  const addproductsCart = () => {
    setShoppingCart([...shoppingCart, ...counterProduct]);
  };
  console.log("Productos que estan en el carrito de compras👇");
  console.log(shoppingCart);

  const btn = (
    <ButtonStyled stock={stock} onClick={notify}>
      {stock > 0 ? "Agregar al carrito" : "No hay stock"}
      <Toaster />
    </ButtonStyled>
  );

  return !btnAddProduct ? (
    btn
  ) : btnAddProduct && numCounter > 0 ? (
    <ButtonStyled>
      <Link to="/shoppingList" className="Go-cart">
        Finalizar Compra
      </Link>
    </ButtonStyled>
  ) : (
    btn
  );
};
