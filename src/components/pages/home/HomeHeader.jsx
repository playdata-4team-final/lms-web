import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: white;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  height: 7vh;
  z-index: 99;
`;
const IconWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <IconWrap>
        <img src="C:\final\lms-web\public\images\Homelogo.png" alt="HeLMeS" />
      </IconWrap>
    </HeaderContainer>
  );
};

export default HomeHeader;
