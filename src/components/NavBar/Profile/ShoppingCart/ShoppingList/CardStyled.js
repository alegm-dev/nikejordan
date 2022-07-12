import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px 0px rgba(3, 3, 3, 0.3);
  margin: 0.3rem 0;
  .box-image {
    position: relative;
    display: flex;
    top: 0;
    left: 0;
    img {
      position: absolute;
      max-width: 100px;
      top: 50%;
      transform: translateY(-50%);
      border-right: 1px solid lightgrey;
      padding: 0 0.1rem;
    }
    .box-info {
      position: relative;
      left: 7rem;
      margin: auto 0;
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 14pxs;
      }
      .model-color {
        font-size: 12px;
        color: grey;
        margin-bottom: 0.1rem;
      }
      .price {
        width: fit-content;
        padding: 0.2rem;
        margin: 0.2rem 0;
        background: green;
        color: #fff;
        border-radius: 5px;
      }
      .quantity {
        color: darkgrey;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  .btn {
    margin: 1.5rem;
    .btn-delete {
      background: transparent;
      color: #333;
      border: none;
      font-family: Roboto;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export default Card;
