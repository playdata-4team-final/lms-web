

import {useState} from "react";
import {Link} from "react-router-dom";
import "../../Layout/menubar/GlobalHedaer.css"
import {useRecoilValue} from "recoil";
import {idAtom, roleAtom} from "../../../global/atom/LoginAtom";
import HomeLogo from "../../../atoms/HomeLogo";
import AdminMenu from "./side_menu/AdminMenu";
import ProfessorMenu from "./side_menu/ProfessorMenu";
import StudentMenu from "./side_menu/StudentMenu";
import { roleAtom, idAtom } from "../../../global/atom/LoginAtom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const CoverButton = styled.div`
  --hover-background: #ff0000;
  --hover-text: #000000;
  --hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  --background: #a2e43f;
  --text: #000000;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  clear: both;
  border-radius: 3px;
  margin-top: 10px;
  border-radius: 24px;
  padding: 10px 20px;
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


const GlobalHeader = () => {
  const userRole = useRecoilValue(roleAtom);
  const userId = useRecoilValue(idAtom);
  return (
    <div>
      <div className={`main_header`}>
        <div className="section">
          <Link to="/main" className={`logo`}>
            <HomeLogo />
          </Link>
        </div>
        {userRole === "ADMIN" && (
          <div className="_button-list">
            <AdminMenu />
          </div>
        )}
        {userRole === "PROFESSOR" && (
          <div className="_button-list">
            <ProfessorMenu />
          </div>
        )}
        {userRole === "STUDENT" && (
          <div className="_button-list">
            <StudentMenu />
          </div>
        )}
        <div className={"first_menu"}>
          <div>
            <div className="user-name">{userId}님</div>
          </div>
          <div>
            <Link to="/" className="logout">
              <CoverButton>로그아웃</CoverButton>{" "}
            </Link>
          </div>
          <div />
          {userRole === "ADMIN" && (
            <Link to="admin/mail/watchMail" className="mail-btn">
              <CoverButton>✉️내 쪽지</CoverButton>
            </Link>
          )}
          {userRole === "STUDENT" && (
            <Link to="admin/mail/watchMail" className="mail-btn">
              <CoverButton>✉️내 쪽지</CoverButton>
            </Link>
          )}
          {userRole === "PROFESSOR" && (
            <Link to="admin/mail/watchMail" className="mail-btn">
              <CoverButton>✉️내 쪽지</CoverButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalHeader;
