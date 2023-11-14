import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CoverVideo = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BottomFade = styled.div`
  position: absolute;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 4%,
    rgba(255, 255, 255, 0.5032606792717087) 77%,
    rgba(255, 255, 255, 1) 89%
  );
  top: 91vh;
  width: 100vw;
  height: 10vh;
  z-index: 1;
`;
const CoverBody = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 16px;
`;
const CoverTitle = styled.div`
  color: black;
  font-weight: 800;
  font-size: 7vh;
  text-align: center;
  line-height: 65px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const CoverText = styled.div`
  color: black;
  font-weight: 600;
  line-height: 35px;
`;
const CoverTextu = styled.div`
  // cover text upper
  color: black;
  padding-top: 5vh;
  @media (max-width: 480px) {
    padding-top: 2vh;
  }
`;
const CoverButton = styled.div`
  --hover-background: #ffcc00;
  --hover-text: #000000;
  --hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  --background: #ffffff;
  --text: #000000;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  clear: both;
  border-radius: 3px;
  margin-top: 10px;
  border-radius: 24px;
  padding: 16px 32px;
  font-family: "Roboto";
  font-weight: 1000;
  display: block;
  outline: none;
  text-decoration: none;
  font-size: 18px;
  background: var(--background);
  color: var(--text);
  box-shadow: var(--shadow);

  &:hover {
    background: var(--hover-background);
    color: var(--hover-text);
    box-shadow: var(--hover-shadow);
  }
  @media (max-width: 480px) {
    padding: 10px 60px;
    margin-top: 3vh;
  }
`;

const HomeMain = () => {
  return (
    <>
      <Container id="home">
        <CoverVideo></CoverVideo>
        <CoverBody>
          <CoverTitle>학사 관리 시스템</CoverTitle>
          <CoverTitle>HeLMeS</CoverTitle>
          <CoverTextu>🚀🚀</CoverTextu>
          <CoverText></CoverText>
          <CoverButton>강의 신청 </CoverButton>
        </CoverBody>
        <BottomFade />
      </Container>
    </>
  );
};

export default HomeMain;
