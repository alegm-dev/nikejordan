import { CardStyled } from "./Styled/CardStyled";
import { useCartContext } from "../../../../../contexts/CartContext";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  const { functionContext } = useCartContext();
  const { removeFromCart } = functionContext;
  const { product, quantity } = item;

  return (
    <CardStyled>
      <li className="box-image">
        <img src={product.image2} alt={product.name} />
        <img src={product.image} alt={product.name} />
      </li>
      <li className="box-info">
        <Link to={`/itemDetail/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="model-color">
          {product.model} {product.color}
        </p>
        <div className="price">
          <p>${Intl.NumberFormat("es-AR").format(product.price)}</p>
        </div>
        <p className="quantity">
          ({quantity === 1 ? `${quantity} unidad` : `${quantity} unidades`})
        </p>
      </li>
      <li className="box-delete">
        <button
          className="btn-delete"
          onClick={() => removeFromCart(product.id)}
        >
          Eliminar
        </button>
      </li>
    </CardStyled>
  );
};
