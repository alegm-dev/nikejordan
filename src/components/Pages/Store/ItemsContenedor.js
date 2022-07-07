import styled from "styled-components";

const ItemsContenedor = styled.div`
  width: 100%;
  ul.sneakers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    justify-items: center;
    align-items: center;
    li {
      list-style: none;
      .card {
        position: relative;
        width: 300px;
        height: 420px;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid lightgrey;
        overflow: hidden;
        ::before {
          content: "";
          position: absolute;
          top: -150%;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f1f1f1;
          transform: skewY(345deg);
          transition: 0.5s;
        }
        :hover::before {
          top: -70%;
          transform: skewY(390deg);
        }
        ::after {
          content: "Nike";
          position: absolute;
          bottom: 0;
          left: 0;
          font-weight: 600;
          font-size: 10rem;
          color: #f1f1f1f1;
        }
        .imgBox {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 50px;
          left: 0;
          z-index: 1;
          img {
            position: absolute;
            max-width: 100%;
            transition: 0.5s;
            top: 0;
          }
        }
        &:hover .imgBox img {
          max-width: 80%;
          top: -40px;
        }
        .contentBox {
          position: relative;
          top: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          opacity: 0;
          transition: 0.9s;
          z-index: 1;
          h3.name {
            font-size: 25px;
            color: #333;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .details {
            position: relative;
            top: 200px;
            opacity: 0;
            transition: 0.5s;
          }
        }
        &:hover .contentBox {
          top: 60%;
          opacity: 1;
        }
      }
    }
  }
`;

export default ItemsContenedor;
