import { FiUser } from "react-icons/fi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const User = styled.div`
  margin: 0.5rem;
  cursor: pointer;
  .Nickname {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 14px;
    color: #bf3f43;
    text-decoration: none;
    .Avatar {
      font-size: 30px;
      color: #bf3f43;
      margin-left: 1rem;
    }
  }
`;

export const Login = () => {
  return (
    <User>
      <Link to="/login" className="Nickname">
        <FiUser className="Avatar" />
      </Link>
    </User>
  );
};
