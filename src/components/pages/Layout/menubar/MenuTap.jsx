import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #f9b32c;
  height: 8vh;
  position: fixed;
  bottom: 0;
  z-index: 99;
`;
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuTap = ({ menu }) => {
  return (
    <MenuContainer>
      <Link to={menu.redirect}>{menu.icon}</Link>
    </MenuContainer>
  );
};

export default MenuTap;
