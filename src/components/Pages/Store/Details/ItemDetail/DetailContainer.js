import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  background: #fff;
  border-radius: 10px;
  border: 1px solid lightgrey;
  .Box-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    padding: 0 2rem;
    top: -50px;
    left: 0;
    img {
      position: absolute;
      max-width: 100%;
      width: 960px;
      min-width: 560px;
      transition: 0.5s;
      top: 0;
    }
  }
  .Box-info {
    width: 40%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    padding: 2rem;
    .name {
      color: #000;
      font-size: 42px;
    }
    .price {
      font-size: 32px;
      font-weight: 400;
      color: #000;
      margin: 1rem 0;
    }
    .descrip {
      font-size: 16px;
      color: grey;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 991px) {
    flex-direction: column;
    .Box-image {
      width: 100%;
    }
    .Box-info {
      width: 100%;
      margin-top: 23rem;
    }
  }
`;

export default DetailContainer;
