

import {useState} from "react";
import {Link} from "react-router-dom";
import "../../Layout/menubar/GlobalHedaer.css"
import {useRecoilValue} from "recoil";
import {idAtom, roleAtom} from "../../../global/atom/LoginAtom";
import HomeLogo from "../../../atoms/HomeLogo";
import AdminMenu from "./side_menu/AdminMenu";
import ProfessorMenu from "./side_menu/ProfessorMenu";
import StudentMenu from "./side_menu/StudentMenu";


const GlobalHeader = () => {
  const user = { id: 1, name: "qwe", role: "STUDENT" };

  return (
    <div>
      <div className={`main_header`}>
        <div className="section">
          <Link to="/main" className={`logo`}>
            <HomeLogo />
          </Link>
        </div>
        {user && user.role === "ADMIN" && (
          <div className="_button-list">
            <AdminMenu />
          </div>
        )}
        {user && user.role === "PROFESSOR" && (
          <div className="_button-list">
            <ProfessorMenu />
          </div>
        )}
        {user && user.role === "STUDENT" && (
          <div className="_button-list">
            <StudentMenu />
          </div>
        )}
        <div className={"first_menu"}>
          <div>
            <div className="user-name" value="`${user.name}`" />
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
