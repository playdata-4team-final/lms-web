import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin: 0 2rem;

  @media (max-width: 200px) {
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
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
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
  margin-top: 5px;
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

const AdminMenu = () => {
  const navigate = useNavigate();

  const [isLectureDropdownOpen, setIsLectureDropdownOpen] = useState(false);
  const [isMailDropdownOpen, setIsMailDropdownOpen] = useState(false);
  const [isNoticeDropdownOpen, setIsNoticeDropdownOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const toggleLectureDropdown = () => {
    setIsLectureDropdownOpen(!isLectureDropdownOpen);
    setIsMailDropdownOpen(false);
    setIsNoticeDropdownOpen(false);
    setSelectedMenu(null);
  };

  // handleMailItemClick and handleLectureItemClick functions remain the same

  const toggleMailDropdown = () => {
    setIsMailDropdownOpen(!isMailDropdownOpen);
    setIsLectureDropdownOpen(false);
    setIsNoticeDropdownOpen(false);
    setSelectedMenu(null);
  };

  const toggleNoticeDropdown = () => {
    setIsNoticeDropdownOpen(!isNoticeDropdownOpen);
    setIsLectureDropdownOpen(false);
    setIsMailDropdownOpen(false);
    setSelectedMenu(null);
  };
  const handleMailItemClick = (mailType) => {
    switch (mailType) {
      case "writeMail":
        navigate("/admin/mail/writeMail");
        break;
      case "watchMail":
        navigate("/admin/mail/watchMail");
        break;

      default:
        break;
    }
  };
  const handleLectureItemClick = (acceptType) => {
    switch (acceptType) {
      case "acceptMajor":
        navigate("/admin/accept/acceptMajor");
        break;
      case "acceptLecture":
        navigate("/admin/accept/acceptLecture");
        break;
      case "myLecture":
        navigate("/admin/lecture/myLecture");
        break;

      default:
        break;
    }
  };
  const handleNoticeItemClick = (noticeType) => {
    switch (noticeType) {
      case "writeNotice":
        navigate("/admin/notice/writeNotice");
        break;
      case "watchNotice":
        navigate("/admin/notice/watchNotice");
        break;
      default:
        break;
    }
  };

  return (
    <Nav>
      <Dropdown
        onMouseEnter={toggleMailDropdown}
        onMouseLeave={() => setIsMailDropdownOpen(false)}
      >
        <StyledList>메일 서비스</StyledList>
        {isMailDropdownOpen && (
          <DropdownContent>
            <StyledList onClick={() => handleMailItemClick("writeMail")}>
              메일 작성
            </StyledList>
            <StyledList onClick={() => handleMailItemClick("watchMail")}>
              메일 보기
            </StyledList>
          </DropdownContent>
        )}
      </Dropdown>
      <Dropdown
        onMouseEnter={toggleNoticeDropdown}
        onMouseLeave={() => setIsNoticeDropdownOpen(false)}
      >
        <StyledList onClick={() => setIsNoticeDropdownOpen(true)}>
          강의서비스
        </StyledList>
        {isNoticeDropdownOpen && (
          <DropdownContent>
            <StyledList onClick={() => handleLectureItemClick("acceptMajor")}>
              전공 허가
            </StyledList>
            <StyledList onClick={() => handleLectureItemClick("acceptLecture")}>
              강의 허가
            </StyledList>
          </DropdownContent>
        )}
      </Dropdown>
      <Dropdown
        onMouseEnter={toggleNoticeDropdown}
        onMouseLeave={() => setIsNoticeDropdownOpen(false)}
      >
        <StyledList onClick={() => setIsNoticeDropdownOpen(true)}>
          공지사항
        </StyledList>
        {isNoticeDropdownOpen && (
          <DropdownContent>
            <StyledList onClick={() => handleNoticeItemClick("watchNotice")}>
              공지 작성
            </StyledList>
            <StyledList onClick={() => handleNoticeItemClick("watchNotice")}>
              공지 보기
            </StyledList>
          </DropdownContent>
        )}
      </Dropdown>
    </Nav>
  );
};

export default AdminMenu;
