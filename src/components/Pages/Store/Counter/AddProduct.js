import ButtonStyled from "./ButtonStyled";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../contexts/CartContext";

export const AddProduct = ({
  stock,
  cardDate,
  numCounter,
  btnAddProduct,
  setBtnAddProduct,
}) => {
  const { cart, functionContext } = useCartContext();
  const { addToCart } = functionContext;

  //Funcion que pasa los datos del boton finalizar compra al carrito
  const onAdd = () => {
    addToCart(cardDate[0], numCounter);
    stateBtn();
  };
  const goToCart = () => {
    setTimeout(() => {
      setBtnAddProduct(true); //Renderiza el boton finalizar compra
    }, 1000);
  };
  const stateBtn = () => {
    const producto = cart.filter((i) => i.product.id === cardDate[0].id); //Se obtiene el producto seleccionado.
    !producto.length
      ? goToCart()
      : producto.forEach((i) => {
          console.log(i.quantity + " cantidad produc");
          const n = numCounter + i.quantity;
          if (n <= cardDate[0].stock) {
            return goToCart();
          } else if (i.quantity === cardDate[0].stock) {
            return goToCart();
          }
        });
  };

  const btn = (
    <ButtonStyled stock={stock} onClick={onAdd}>
      {stock > 0 ? "Agregar al carrito" : "No hay stock"}
      <Toaster reverseOrder={true} />
    </ButtonStyled>
  );

  return btnAddProduct && numCounter > 0 ? (
    <Link to="/shoppingList" style={{ width: "100%" }}>
      <ButtonStyled btnAddProduct={btnAddProduct}>Ir al carrito</ButtonStyled>
    </Link>
  ) : (
    btn
  );
};
