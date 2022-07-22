import { RaceBy } from "@uiball/loaders";
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
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      Cargando
      <RaceBy size={80} speed={1.5} color="#bf3f43" />
    </LoaderContainer>
  );
};
