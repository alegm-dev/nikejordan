import { useCartContext } from "../../../../../contexts/CartContext";
import { ArrowBack } from "../../../../ArrowBack/ArrowBack";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShoppingContainer from "./ShoppingContainer";
import Button from "../../../../../StyledDefault/Button";
import { FormOrder } from "../FormOrder/FormOrder";

export const ShoppingList = () => {
  const [showForm, setShowForm] = useState(false);
  const { cart, functionContext } = useCartContext();
  const { clearCart, getTotal, getQuantity } = functionContext;

  const handlerForm = () => {
    setShowForm(!showForm);
  };

  return (
    <ShoppingContainer showForm={showForm}>
      <div className="box-listShopping ">
        <ArrowBack link="/store" />
        <h3 className="list-title">Lista de productos</h3>
        <ul className="box-items">
          {cart.length > 0 ? (
            cart.map((item) => <Card key={item.product.id} item={item} />)
          ) : (
            <p className="cart-empty">El carrito esta vacio</p>
          )}
          {cart.length > 0 ? (
            <Button className="btn clearCart" onClick={() => clearCart()}>
              Vaciar Carrito
            </Button>
          ) : (
            <Link to="/store" className="btn goStore">
              <Button>Ir a la tienda</Button>
            </Link>
          )}
        </ul>
        <div className="cart-footer">
          <h3 className="quantity">
            Productos: <p>{getQuantity()}</p>
          </h3>
          <h3 className="total">
            Total: <p>${getTotal()}</p>
          </h3>
        </div>
        {cart.length > 0 && (
          <Button className="btn-buying" onClick={handlerForm}>
            Finalizar Compra
          </Button>
        )}
      </div>
      <FormOrder showForm={showForm} handlerForm={handlerForm} />
    </ShoppingContainer>
  );
};
