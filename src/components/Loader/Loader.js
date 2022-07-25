import styled from "styled-components";

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: #bf3f43;
  }
  .loader {
    position: relative;
    width: 100px;
    height: 100px;
  }

  .loader:before,
  .loader:after {
    content: "";
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
  }
  .loader:after {
    box-shadow: 0 2px 0 #ff3d00 inset;
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <span class="loader">cargando</span>
    </LoaderContainer>
  );
};
