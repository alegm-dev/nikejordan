import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Burger } from "./Burger";
import { SiNike } from "react-icons/si";
import styled from "styled-components";
import NavbarContainer from "./NavbarContainer";
import MenuStyled from "./MenuStyled";
import { SiJordan } from "react-icons/si";
import { Profile } from "./Profile/Profile";
import { NavLink, Link } from "react-router-dom";

const Logo = styled.div`
  font-size: 48px;
  cursor: pointer;
  transform: translateX(35px);
  .logoLink {
    text-decoration: none;
    color: #bf3f43;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const Navbar = ({ shoppingCart, setShoppingCart }) => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
    //El scroll se desactiva al abrir el Navbar
    const body = document.body;
    openNav
      ? (body.style.overflowY = "visible")
      : (body.style.overflowY = "hidden");
  };

  return (
    <NavbarContainer>
      <Burger openNav={openNav} handleClick={handleClick} />
      <Logo>
        <Link to="/home" className="logoLink">
          <SiNike />
        </Link>
      </Logo>
      <SiJordan className="logoJordan" />
      <MenuStyled openNav={openNav}>
        {MenuItems.map((item) => {
          return (
            <li key={item.Id}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive ? "active" : `${item.cName}`
                }
                onClick={openNav ? handleClick : null}
              >
                {item.Title}
              </NavLink>
            </li>
          );
        })}
      </MenuStyled>
      <Profile
        shoppingCart={shoppingCart} //state
        setShoppingCart={setShoppingCart} //setState
      />
    </NavbarContainer>
  );
};
