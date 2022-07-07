import { useState } from "react";
import styled from "styled-components";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { CounterIcon } from "./CounterIcon";
import { AddProduct } from "./AddProduct";

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p.stock {
    font-size: 14px;
    color: grey;
    margin: 0.2rem;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  width: 90%;
  margin: auto;
  margin: ${(props) => (props.stock === 0 ? "0rem" : "0.5rem")};
  visibility: ${(props) => (props.stock === 0 ? "hidden" : "visible")};
`;

export const Counter = ({ stock, cardDate, shoppingCart, setShoppingCart }) => {
  const [numCounter, setNumCounter] = useState(0);
  const [btnAddProduct, setBtnAddProduct] = useState(false); //Estado del boton para agregar al carrito
  const [counterProduct, setCounterProduct] = useState([]);

  const addProduct = () => {
    if (numCounter < stock) {
      setNumCounter(numCounter + 1);
      setCounterProduct([...counterProduct, ...cardDate]);
    }
  };
  console.log(cardDate);
  const SubtractProduct = () => {
    if (numCounter > 0) {
      setNumCounter(numCounter - 1);
      setCounterProduct(counterProduct.splice(1));
    }
  };

  return (
    <CounterContainer>
      {!btnAddProduct ? (
        <CounterWrapper stock={stock}>
          <CounterIcon Icon={<GrSubtract onClick={SubtractProduct} />} />
          <h4>{numCounter}</h4>
          <CounterIcon Icon={<GrAdd onClick={addProduct} />} />
        </CounterWrapper>
      ) : (
        ""
      )}

      <AddProduct
        cardDate={cardDate}
        stock={stock}
        numCounter={numCounter} //state
        btnAddProduct={btnAddProduct} //setState
        setBtnAddProduct={setBtnAddProduct} //setState
        shoppingCart={shoppingCart} //state
        setShoppingCart={setShoppingCart} //setState
        counterProduct={counterProduct}
      />
      <p className="stock">Stock disponible: {stock}</p>
    </CounterContainer>
  );
};
