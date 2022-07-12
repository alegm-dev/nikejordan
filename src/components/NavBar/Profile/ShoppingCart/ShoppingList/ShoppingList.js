import { useCartContext } from "../../../../../contexts/CartContext";
import ShoppingContenedor from "./ShoppinContenedor";
import { ArrowBack } from "../../../../ArrowBack/ArrowBack";
import { Card } from "./Card";
import Button from "../../../../../StyledDefault/Button";

//import { CounterCart } from "./CounterCart";

export const ShoppingList = () => {
  const { cart, functionContext } = useCartContext();
  const { clearCart, getTotal } = functionContext;

  console.log(cart);

  return (
    <ShoppingContenedor>
      <ArrowBack link="/store" />
      <div className="box-listShopping ">
        <h3 className="list-title">Productos en el carrito</h3>
        <div className="box-items">
          {cart.length > 0 ? (
            cart.map((item) => <Card key={item.product.id} item={item} />)
          ) : (
            <p className="cart-empty">El carrito esta vacio</p>
          )}
        </div>
      </div>
      <div className="cart-footer">
        <Button className="btn-clearCart" onClick={() => clearCart()}>
          Vaciar carrito
        </Button>
        <h3>
          Total: <p>${getTotal()}</p>
        </h3>
      </div>
    </ShoppingContenedor>
  );
};
