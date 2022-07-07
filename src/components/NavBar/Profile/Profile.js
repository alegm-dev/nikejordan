import { Login } from "./Login/Login";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Profile = ({ shoppingCart, setShoppingCart }) => {
  return (
    <ProfileContainer>
      <Login />
      <ShoppingCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </ProfileContainer>
  );
};
