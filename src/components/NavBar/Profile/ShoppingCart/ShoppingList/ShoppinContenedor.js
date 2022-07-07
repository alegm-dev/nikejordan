import styled from "styled-components";

const ShoppingContenedor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .Box {
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 400px;
    background: white;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid lightgrey;
    margin: 0.5rem;
  }

  .Box.cashRegister {
    min-height: 200px;
  }
`;

export default ShoppingContenedor;
