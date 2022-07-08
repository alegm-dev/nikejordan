import styled from "styled-components";

const NavbaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background: transparent;
  position: ${(props) => (props.scroll ? "sticky" : "relative")};
  padding: 1rem;
  top: ${(props) => (props.scroll ? "0px" : "none")};
  margin-bottom: 5rem;
  .logoJordan {
    position: fixed;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    color: #333;
    z-index: 1;
  }
`;

export default NavbaContainer;
