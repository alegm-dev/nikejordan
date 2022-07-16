import { useCartContext } from "../../../../../contexts/CartContext";
import ShoppingContainer from "./ShoppingContainer";
import { ArrowBack } from "../../../../ArrowBack/ArrowBack";
import { Card } from "./Card";
import Button from "../../../../../StyledDefault/Button";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

//import { CounterCart } from "./CounterCart";

export const ShoppingList = () => {
  const { cart, functionContext } = useCartContext();
  const { clearCart, getTotal, getQuantity } = functionContext;

  console.log(cart);

  const handlerBuying = () => {
    toast("Aun no esta disponible", { id: "buying" });
  };

  return (
    <ShoppingContainer>
      <ArrowBack link="/store" />
      <div className="box-listShopping ">
        <h3 className="list-title">Lista de productos</h3>
        <ul className="box-items">
          {cart.length > 0 ? (
            cart.map((item) => <Card key={item.product.id} item={item} />)
          ) : (
            <p className="cart-empty">El carrito esta vacio</p>
          )}
          {cart.length > 0 ? (
            <Button className="btn clearCart" onClick={() => clearCart()}>
              Vaciar carrito
            </Button>
          ) : (
            <Button className="btn goStore">
              <Link to="/store"> Ir a comprar</Link>
            </Button>
          )}
        </ul>
      </div>
      <div className="cart-footer">
        <h3 className="quantity">
          Productos: <p>{getQuantity()}</p>
        </h3>
        <h3 className="total">
          Total: <p>${getTotal()}</p>
        </h3>
      </div>
      <Button className="btn-buying" onClick={handlerBuying}>
        <Toaster />
        Finalizar Compra
      </Button>
    </ShoppingContainer>
  );
};
