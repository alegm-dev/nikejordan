import ButtonStyled from "./ButtonStyled";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../contexts/CartContext";

export const AddProduct = ({
  stock,
  cardDate,
  numCounter,
  btnAddProduct,
  setBtnAddProduct,
}) => {
  const { functionContext } = useCartContext();

  //Funcion que pasa los datos del boton finalizar compra al carrito
  const onAdd = () => {
    //recibe la cantidad que esta en itemcount y se la pasa a la funcion addtocart
    functionContext.addToCart(cardDate[0], numCounter);
    //Renderiza el boton finalizar compra
    setTimeout(() => {
      setBtnAddProduct(true);
    }, 800);
  };

  //Notifica cuantos elemento se agregaron al carrito
  const notify = () => {
    if (numCounter === 0) {
      toast("Seleccione minimo 1 unidad", {
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
      onAdd();
    }
  };

  //console.log("Productos que estan en el carrito de compras👇");
  //console.log(cart);

  const btn = (
    <ButtonStyled stock={stock} onClick={notify}>
      {stock > 0 ? "Agregar al carrito" : "No hay stock"}
      <Toaster />
    </ButtonStyled>
  );

  return btnAddProduct && numCounter > 0 ? (
    <ButtonStyled btnAddProduct={btnAddProduct}>
      <Link to="/shoppingList" className="Go-cart">
        Ir al carrito
      </Link>
    </ButtonStyled>
  ) : (
    btn
  );
};
