import styled from "styled-components";
import Button from "../../../../StyledDefault/Button";

const ButtonStyled = styled(Button)`
  width: 90%;
  margin: auto;
  background: ${(props) =>
    props.stock === 0
      ? "brown"
      : props.btnAddProduct
      ? "darkblue"
      : "darkgreen"};
  pointer-events: ${(props) => (props.stock === 0 ? "none" : "auto")};
  color: #fff;
  margin-bottom: 0.5rem;
  border: none;
  .Go-cart {
    position: initial;
    background: transparent;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
  }
`;

export default ButtonStyled;
