import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { roleAtom } from "../../global/atom/LoginAtom";
import styled from "styled-components";

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

const MailService = () => {
  const role = useRecoilValue(roleAtom);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const thirdSegment = pathSegments[3];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Dropdown
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div onClick={toggleDropdown}>메일 서비스</div>
      {isDropdownOpen && (
        <DropdownContent>
          {role === "STUDENT" && (
            <>
              <Link
                to="/student/mail/writeMail"
                className={thirdSegment === "writeMail" ? "in" : ""}
              >
                메일 작성
              </Link>
              <Link
                to="/student/mail/watchMail"
                className={thirdSegment === "watchMail" ? "in" : ""}
              >
                메일 보기
              </Link>
            </>
          )}

          {role === "ADMIN" && (
            <>
              <Link
                to="/admin/mail/writeMail"
                className={thirdSegment === "writeMail" ? "in" : ""}
              >
                메일 작성
              </Link>
              <Link
                to="/admin/mail/watchMail "
                className={thirdSegment === "watchMail" ? "in" : ""}
              >
                메일 보기
              </Link>
            </>
          )}

          {role === "PROFESSOR" && (
            <>
              <Link
                to="/professor/mail/writeMail"
                className={thirdSegment === "writeMail" ? "in" : ""}
              >
                메일 작성
              </Link>
              <Link
                to="/professor/mail/watchMail"
                className={thirdSegment === "watchMail" ? "in" : ""}
              >
                메일 보기
              </Link>
            </>
          )}
        </DropdownContent>
      )}
    </Dropdown>
  );
};

export default MailService;
