import React from "react";
import { SiAccusoft } from "react-icons/si";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70%;
  padding: 4px;
  margin-top: 5px;
`;

const HomeLogo = () => {
  return (
    <LogoContainer>
      <SiAccusoft size="30px" color="orange" />
      <h2> HeLMeS</h2>
    </LogoContainer>
  );
};

export default HomeLogo;
