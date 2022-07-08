import styled from "styled-components";
import Button from "../../../../StyledDefault/Button";
import { Link } from "react-router-dom";

const ButtonStyle = styled(Button)`
  width: 60%;
  position: relative;
  top: 30px;
  padding: 1rem;
  border: none;
  background: transparent;
  border: 2px solid #bf3f43;
  border-radius: 5px;

  cursor: pointer;
  a {
    text-decoration: none;
    color: #bf3f43;
    font-size: 16px;
    font-weight: 600;
  }
  &:hover {
    background: #bf3f43;
  }
  &:hover a {
    color: #fff;
  }
  &:active {
    top: 30px;
  }
`;

export const Details = ({ item }) => {
  return (
    <>
      <ButtonStyle>
        <Link to={`/itemDetail/${item.id}`}>Ver detalle</Link>
      </ButtonStyle>
    </>
  );
};
