import CardStyled from "./CardStyled";
import { useCartContext } from "../../../../../contexts/CartContext";

export const Card = ({ item }) => {
  const { functionContext } = useCartContext();
  const { removeFromCart } = functionContext;
  const { product, quantity } = item;

  return (
    <CardStyled>
      <div className="box-image">
        <img src={product.image2} alt={product.name} />
        <img src={product.image} alt={product.name} />
        <div className="box-info">
          <h3>{product.name}</h3>
          <p className="model-color">
            {product.model} {product.color}
          </p>
          <p className="price">
            ${Intl.NumberFormat("es-AR").format(product.price)}
          </p>
          <h4 className="quantity">(x{quantity})</h4>
        </div>
      </div>
      <div className="btn">
        <button
          className="btn-delete"
          onClick={() => removeFromCart(product.id)}
        >
          Eliminar
        </button>
      </div>
    </CardStyled>
  );
};
