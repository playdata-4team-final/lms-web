import React, { useState } from "react";
import MailMenu from "./in_menu/MailMenu";
import AcceptMenu from "./in_menu/AcceptMenu";
import NoticeMenu from "./in_menu/NoticeMenu";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import MyPage from "../../../my/MyPage";

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
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = (menu) => {
    if (menu === selectedMenu) setSelectedMenu(null);
    else setSelectedMenu(menu);
  };

  return (
    <Nav>
      <StyledList onClick={() => openModal("mail")}>메일 서비스</StyledList>
      {selectedMenu === "mail" && (
        <div className="modal">
          <div className="modal-content">
            {/* <span className="close" onClick={closeModal}>&times;</span> */}
            <MailMenu />
          </div>
        </div>
      )}
      <StyledList onClick={() => openModal("accept")}>관리 서비스</StyledList>
      {selectedMenu === "accept" && (
        <div className="modal">
          <div className="modal-content">
            {/* <span className="close" onClick={closeModal}>&times;</span> */}
            <AcceptMenu />
          </div>
        </div>
      )}
      <StyledList onClick={() => openModal("notice")}>공지사항</StyledList>
      {selectedMenu === "notice" && (
        <div className="modal">
          <div className="modal-content">
            {/* <span className="close" onClick={closeModal}>&times;</span> */}
            <NoticeMenu />
          </div>
        </div>
      )}
    </Nav>
  );
};

export default AdminMenu;
