import { useCartContext } from "../../../../../contexts/CartContext";
import ShoppingContenedor from "./ShoppinContenedor";
import { ArrowBack } from "../../../../ArrowBack/ArrowBack";
import Button from "../../../../../StyledDefault/Button";
import Card from "./CardStyled";
//import { CounterCart } from "./CounterCart";

export const ShoppingList = () => {
  const { cart, functionContext } = useCartContext();

  console.log(cart);

  return (
    <ShoppingContenedor>
      <ArrowBack link="/store" />
      <div className="box-listShopping ">
        <h3 className="list-title">Productos en el carrito</h3>
        <div className="box-items">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <Card key={item.product.id}>
                  <div className="box-image">
                    <img src={item.product.image2} alt={item.name} />
                    <img src={item.product.image} alt={item.name} />
                    <div className="box-info">
                      <h3>{item.product.name}</h3>
                      <p className="model-color">
                        {item.product.model} {item.product.color}
                      </p>
                      <p className="price">
                        ${Intl.NumberFormat("es-AR").format(item.product.price)}
                      </p>
                      <h4 className="quantity">(x{item.quantity})</h4>
                    </div>
                  </div>
                  {/*<CounterCart
                    quantity={item.quantity}
                    stock={item.product.stock}
                  />*/}
                  <div className="btn">
                    <button
                      className="btn-delete"
                      onClick={() =>
                        functionContext.removeFromCart(item.product.id)
                      }
                    >
                      Eliminar
                    </button>
                  </div>
                </Card>
              );
            })
          ) : (
            <p className="cart-empty">El carrito esta vacio</p>
          )}
        </div>
      </div>
      <div className="cart-footer">
        <Button
          className="btn-clearCart"
          onClick={() => functionContext.clearCart()}
        >
          Vaciar carrito
        </Button>
        <h3>
          Total: <p>${functionContext.getTotal()}</p>
        </h3>
      </div>
    </ShoppingContenedor>
  );
};
