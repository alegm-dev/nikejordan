import { useState } from "react";
import styled from "styled-components";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { CounterIcon } from "./CounterIcon";
import { AddProduct } from "./AddProduct";

const CounterContainer = styled.div`
  width: 100%;
  max-width: 360px;
  margin: auto;
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
  border-radius: 0.25rem;
  width: 100%;
  margin: auto;
  margin: ${(props) => (props.stock === 0 ? "0rem" : "0.5rem")};
  visibility: ${(props) => (props.stock === 0 ? "hidden" : "visible")};
`;

export const Counter = ({ stock, cardDate }) => {
  const [numCounter, setNumCounter] = useState(1);
  const [btnAddProduct, setBtnAddProduct] = useState(false); //Estado del boton para agregar al carrito

  const addProduct = () => {
    if (numCounter < stock) {
      setNumCounter(numCounter + 1);
    }
  };

  const SubtractProduct = () => {
    if (numCounter > 1) {
      setNumCounter(numCounter - 1);
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
        stock={stock}
        cardDate={cardDate}
        numCounter={numCounter} //state
        btnAddProduct={btnAddProduct} //setState
        setBtnAddProduct={setBtnAddProduct} //setState
      />
      <p className="stock">Stock disponible: {stock}</p>
    </CounterContainer>
  );
};
