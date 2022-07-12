import styled from "styled-components";

const CartStyled = styled.div`
  position: relative;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  a {
    text-decoration: none;
    color: #bf3f43;
  }
  p {
    position: absolute;
    bottom: 20px;
    left: 16px;
    font-size: 10px;
    background: #bf3f43;
    color: #fff;
    padding: 0.2rem 0.4rem;
    border-radius: 10px;
  }
`;
export default CartStyled;
