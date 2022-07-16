import styled from "styled-components";

const ShoppingContainer = styled.div`
  position: relative;
  max-width: 720px;
  margin: auto auto 2rem;
  .box-listShopping {
    .list-title {
      font-size: 30px;
      text-align: center;
      margin-bottom: 2rem;
      color: #fff;
      -webkit-text-stroke: 1px grey;
    }
    .box-items {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 50vh;
      background: #fff;
      border-radius: 5px;
      padding: 0.5rem;
      margin-bottom: 5rem;
      p.cart-empty {
        position: absolute;
        color: lightgrey;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .btn {
    position: absolute;
    bottom: -40px;
    margin: 1rem;
    border: none;
  }
  .btn.clearCart {
    background: #bf3f43;
    color: #fff;
  }
  .btn.goStore {
    background: green;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .cart-footer {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 300;
      p {
        width: fit-content;
        padding: 0.3rem;
        margin: 0.5rem;
        background: green;
        color: #fff;
        border-radius: 5px;
        font-weight: 500;
      }
    }
    .quantity {
      p {
        background: #fff;
        padding: 0.3rem;
        color: #333;
      }
    }
  }
  .btn-buying {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 1rem;
    background: #3f43bf;
    color: #fff;
    border: none;
  }
`;

export default ShoppingContainer;
