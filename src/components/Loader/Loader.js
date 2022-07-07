import { ThreeBody } from "@uiball/loaders";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeBody size={50} speed={1.1} color="#bf3f43" />
    </LoaderContainer>
  );
};
