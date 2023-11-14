// improt css
// "main_header": div 전체 틀, 색깔, 글씨체
// "first_menu": className:"user-image"
// className="user-name",  className="logout,  className="mailBox"

import { useState } from "react";
import { Link } from "react-router-dom";
import "../../Layout/menubar/GlobalHeader.css";
import HomeLogo from "../../../atoms/HomeLogo";
import styled, { keyframes } from "styled-components";
import MailMenu from "./side_menu/in_menu/MailMenu";
import AcceptMenu from "./side_menu/in_menu/AcceptMenu";
import NoticeMenu from "./side_menu/in_menu/NoticeMenu";
import LectureMenu from "./side_menu/in_menu/LectureMenu";

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
const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

const GlobalHeader = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = (menu) => {
    setSelectedMenu(menu); // 이 부분 수정
  };

  const closeModal = () => {
    setSelectedMenu(null);
  };
  const user = { id: 1, name: "오성", role: "ADMIN" };

  return (
    <div>
      <div className={`main_header`}>
        <div className="section">
          <Link to="/main" className={`logo`}>
            <HomeLogo />
          </Link>
        </div>
        <Nav>
          {user && user.role === "ADMIN" && (
            <>
              <StyledList className="dark">
                <a
                  href="mail"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div onClick={() => openModal("mail")}>
                    <span>메</span>
                    <span>일</span>
                    <span>서</span>
                    <span>비</span>
                    <span>스</span>
                  </div>
                  {selectedMenu === "mail" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <MailMenu />
                      </div>
                    </div>
                  )}
                </a>
              </StyledList>
              <StyledList className="white">
                <a
                  href="#about-us"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div onClick={() => openModal("accept")}>
                    <span>관</span>
                    <span>리</span>
                    <span>서</span>
                    <span>비</span>
                    <span>스</span>
                  </div>
                  {selectedMenu === "accept" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <AcceptMenu />
                      </div>
                    </div>
                  )}
                </a>
              </StyledList>
              <StyledList className="dark">
                <a href="/" style={{ color: "black", textDecoration: "none" }}>
                  <div onClick={() => openModal("notice")}>
                    <span>공</span>
                    <span>지</span>
                    <span>사</span>
                    <span>항</span>
                  </div>
                  {selectedMenu === "notice" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <NoticeMenu />
                      </div>
                    </div>
                  )}
                </a>
              </StyledList>
              <StyledList className="dark">
                <a
                  href="/my"
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
          {user && user.role === "PROFESSOR" && (
            <>
              <StyledList className="dark">
                <a
                  href="mail"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div onClick={() => openModal("mail")}>
                    <span>메</span>
                    <span>일</span>
                    <span>서</span>
                    <span>비</span>
                    <span>스</span>
                  </div>
                  {selectedMenu === "mail" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <MailMenu />
                      </div>
                    </div>
                  )}
                </a>
              </StyledList>
              <StyledList className="white">
                <a
                  href="lecture"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div onClick={() => openModal("lecture")}>
                    <span>강</span>
                    <span>의</span>
                    <span>서</span>
                    <span>비</span>
                    <span>스</span>
                  </div>
                  {selectedMenu === "lecture" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <LectureMenu />
                      </div>
                    </div>
                  )}
                </a>
              </StyledList>
              <StyledList className="dark">
                <a
                  href="notice"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div onClick={() => openModal("notice")}>
                    <span>공</span>
                    <span>지</span>
                    <span>사</span>
                    <span>항</span>
                  </div>
                  {selectedMenu === "notice" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <NoticeMenu />
                      </div>
                    </div>
                  )}
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
          {user && user.role === "STUDENT" && (
            <>
              <StyledList className="dark">
                <a
                  href="mail"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div onClick={() => openModal("mail")}>
                    <span>메</span>
                    <span>일</span>
                    <span>서</span>
                    <span>비</span>
                    <span>스</span>
                  </div>
                  {selectedMenu === "mail" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <MailMenu />
                      </div>
                    </div>
                  )}
                </a>
              </StyledList>
              <StyledList className="white">
                <a
                  href="#about-us"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div onClick={() => openModal("lecture")}>
                    <span>강</span>
                    <span>의</span>
                    <span>서</span>
                    <span>비</span>
                    <span>스</span>
                  </div>
                  {selectedMenu === "lecture" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <LectureMenu />
                      </div>
                    </div>
                  )}
                </a>
              </StyledList>
              <StyledList className="dark">
                <a
                  href="#packages"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div onClick={() => openModal("notice")}>
                    <span>공</span>
                    <span>지</span>
                    <span>사</span>
                    <span>항</span>
                  </div>
                  {selectedMenu === "notice" && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <NoticeMenu />
                      </div>
                    </div>
                  )}
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

        <div className={"first_menu"}>
          <div onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <Link to="/myPage" className="user-image" img="myPageUrl"></Link>
            {isDropdownVisible && <DropdownMenu />}
          </div>
          <div>
            <div className="user-name" value={`${user.name}`} />
          </div>
          <div>
            <Link to="/" className="logout">
              로그아웃
            </Link>
          </div>
          <div />
          {user && user.role === "ADMIN" && (
            <Link to="admin/mail/watchMail">✉️내 쪽지</Link>
          )}
          {user && user.role === "STUDENT" && (
            <Link to="student/mail/watchMail">✉️내 쪽지</Link>
          )}
          {user && user.role === "PROFESSOR" && (
            <Link to="professor/mail/watchMail">✉️내 쪽지</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalHeader;
