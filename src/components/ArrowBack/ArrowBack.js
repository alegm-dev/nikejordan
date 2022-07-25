import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const ArrowStyle = styled.button`
  text-decoration: none;
  background: transparent;
  font-size: 30px;
  position: absolute;
  border: none;
  top: 15px;
  left: 15px;
  cursor: pointer;
  z-index: 10;
  a {
    color: #000;
  }
`;

export const ArrowBack = ({ link }) => {
  return (
    <Tooltip title="Volver">
      <ArrowStyle>
        <Link to={link} className="Arrow-back">
          <FiArrowLeft />
        </Link>
      </ArrowStyle>
    </Tooltip>
  );
};
