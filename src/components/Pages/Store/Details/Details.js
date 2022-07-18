import styled from "styled-components";
import Button from "../../../../StyledDefault/Button";
import { Link } from "react-router-dom";

const ButtonStyle = styled(Button)`
  position: relative;
  top: 30px;
  padding: 1rem;
  border: none;
  background: transparent;
  border: 2px solid #bf3f43;
  border-radius: 5px;
  white-space: nowrap;
  color: #bf3f43;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #bf3f43;
    color: #fff;
  }
`;

export const Details = ({ item }) => {
  return (
    <>
      <Link to={`/itemDetail/${item.id}`}>
        <ButtonStyle>Ver mas</ButtonStyle>
      </Link>
    </>
  );
};
