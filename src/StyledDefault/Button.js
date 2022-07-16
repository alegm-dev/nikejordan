import styled from "styled-components";

const Button = styled.button`
  width: 160px;
  position: relative;
  padding: 1rem;
  border: 1px solid #727272;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
