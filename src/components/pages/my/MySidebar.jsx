// MySidebar.jsx
import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { roleAtom } from "../../global/atom/LoginAtom";

import { useNavigate } from "react-router";
const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 20;
  height: 100%;
  background-color: #beb2b2;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledList = styled.li`
  --background: #ffffff;
  --text: #413e3e;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --move-hover: 5px;
  --font-shadow: 0.5px;

  --hover-background: #ffcc00;
  --hover-text: #000000;
  --hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-right: 5px;
  margin-top: 30px;
  border-radius: 12px;
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
const MySidebar = () => {
  const userRole = useRecoilValue(roleAtom);
  const nav = useNavigate();

  const handleLectureItemClick = (lectureType) => {
    switch (lectureType) {
      case "myLecture":
        nav("/student/lecture/myLecture");
        break;

      default:
        break;
    }
  };
  return (
    <>
      {userRole === "STUDENT" && (
        <SidebarContainer>
          <Nav>
            <StyledList
              className="dark"
              onClick={() => handleLectureItemClick("myLecture")}
            >
              <div>
                <span>강의 스케줄</span>
              </div>
            </StyledList>
            <StyledList className="dark">
              <a
                href="#home"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <span>내강의 </span>
                </div>
              </a>
            </StyledList>
            <StyledList className="dark">
              <a
                href="#home"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <span>수강 신청</span>
                </div>
              </a>
            </StyledList>
            <StyledList className="dark">
              <a
                href="#home"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <span>공지사항</span>
                </div>
              </a>
            </StyledList>
          </Nav>
        </SidebarContainer>
      )}

      {userRole === "PROFESSOR" && (
        <SidebarContainer>
          <Nav>
            <StyledList className="dark">
              <a
                href="#home"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <span>내강의</span>
                </div>
              </a>
            </StyledList>
            <StyledList className="dark">
              <a
                href="#home"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <span>강의 스케줄</span>
                </div>
              </a>
            </StyledList>
            <StyledList className="dark">
              <a
                href="#home"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <span>수강 등록</span>
                </div>
              </a>
            </StyledList>
            <StyledList className="dark">
              <a
                href="#home"
                style={{ color: "black", textDecoration: "none" }}
              >
                <div>
                  <span>공지사항</span>
                </div>
              </a>
            </StyledList>
          </Nav>
        </SidebarContainer>
      )}
    </>
  );
};

export default MySidebar;
