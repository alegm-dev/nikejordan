import styled from "styled-components";

const ShoppingContenedor = styled.div`
  position: relative;
  margin: 2rem;
  .box-listShopping {
    margin-bottom: 2rem;
    .list-title {
      font-size: 30px;
      text-align: center;
      margin-bottom: 2rem;
      color: #fff;
      -webkit-text-stroke: 1px grey;
    }
    .box-items {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 50vh;
      background: #fff;
      border-radius: 10px;
      padding: 0.5rem;
      p.cart-empty {
        position: absolute;
        color: lightgrey;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .btn-clearCart {
    background: #bf3f43;
    color: #fff;
    border: none;
  }
  .cart-footer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-weight: 300;
      p {
        width: fit-content;
        padding: 0.3rem;
        margin: 0 0.2rem;
        background: green;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
`;

export default ShoppingContenedor;
