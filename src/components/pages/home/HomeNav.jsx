import React from "react";
import styled, { keyframes } from "styled-components";

const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin: 0 2rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
`;

const StyledList = styled.li`
  --background: #ffffff;
  --text: #000000;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --move-hover: 5px;
  --font-shadow: 0.5px;

  --hover-background: #ffcc00;
  --hover-text: #000000;
  --hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-right: 5px;
  border-radius: 24px;
  padding: 16px 32px;
  font-family: "Roboto";
  font-weight: 500;
  display: block;
  outline: none;
  text-decoration: none;
  font-size: 18px;
  background: var(--background);
  color: var(--text);
  box-shadow: var(--shadow);
  transition: transform var(--duration) ease, box-shadow var(--duration) ease,
    background var(--duration) ease, color var(--duration) ease;

  &:hover {
    --y: var(--move-hover);
    --shadow: var(--shadow-hover);
    transform: translateY(-5px);
    div span {
      animation: ${bounce} 1s infinite;
    }
    background: var(--hover-background);
    color: var(--hover-text);
    box-shadow: var(--hover-shadow);
  }

  div {
    display: flex;
    overflow: hidden;
    text-shadow: 0 var(--font-shadow) 0 var(--text);
    span {
      display: inline-block;
      backface-visibility: hidden;
      font-style: normal;
    }
  }
`;

const HomeNav = ({ userRole }) => {
  userRole = "admin";
  return (
    <Nav>
      {userRole === "admin" && (
        <>
          <StyledList className="dark">
            <a href="#home" style={{ color: "black", textDecoration: "none" }}>
              <div>
                <span>메</span>
                <span>일</span>
                <span>서</span>
                <span>비</span>
                <span>스</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="white">
            <a
              href="#about-us"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>관</span>
                <span>리</span>
                <span>서</span>
                <span>비</span>
                <span>스</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="dark">
            <a
              href="#packages"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>공</span>
                <span>지</span>
                <span>사</span>
                <span>항</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="dark">
            <a
              href="#내정보"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>M</span>
                <span>y</span>
                <span>P</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
              </div>
            </a>
          </StyledList>
        </>
      )}
      {userRole === "professor" && (
        <>
          <StyledList className="dark">
            <a href="#home" style={{ color: "black", textDecoration: "none" }}>
              <div>
                <span>메</span>
                <span>일</span>
                <span>서</span>
                <span>비</span>
                <span>스</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="white">
            <a
              href="#about-us"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>강</span>
                <span>의</span>
                <span>서</span>
                <span>비</span>
                <span>스</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="dark">
            <a
              href="#packages"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>공</span>
                <span>지</span>
                <span>사</span>
                <span>항</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="dark">
            <a
              href="#내정보"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>M</span>
                <span>y</span>
                <span>P</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
              </div>
            </a>
          </StyledList>
        </>
      )}
      {userRole === "student" && (
        <>
          <StyledList className="dark">
            <a href="#home" style={{ color: "black", textDecoration: "none" }}>
              <div>
                <span>메</span>
                <span>일</span>
                <span>서</span>
                <span>비</span>
                <span>스</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="white">
            <a
              href="#about-us"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>강</span>
                <span>의</span>
                <span>서</span>
                <span>비</span>
                <span>스</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="dark">
            <a
              href="#packages"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>공</span>
                <span>지</span>
                <span>사</span>
                <span>항</span>
              </div>
            </a>
          </StyledList>
          <StyledList className="dark">
            <a
              href="#내정보"
              style={{ color: "black", textDecoration: "none" }}
            >
              <div>
                <span>M</span>
                <span>y</span>
                <span>P</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
              </div>
            </a>
          </StyledList>
        </>
      )}
    </Nav>
  );
};
export default HomeNav;
