import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { roleAtom, idAtom } from "../../global/atom/LoginAtom";
import { useRecoilValue } from "recoil";
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

const LectureService = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const thirdSegment = pathSegments[3];
  const role = useRecoilValue(roleAtom);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Dropdown
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      ></Dropdown>
      {role === "ADMIN" && (
        <div className="admin-lecture">
          <Link
            to="/admin/accept/acceptMajor"
            className={thirdSegment === "acceptMajor" ? "in" : ""}
          >
            {" "}
            전공 허가{" "}
          </Link>
          <p />
          <Link
            to="/admin/accept/acceptLecture"
            className={thirdSegment === "acceptLecture" ? "in" : ""}
          >
            {" "}
            강의 허가{" "}
          </Link>
        </div>
      )}

      {role === "PROFESSOR" && (
        <>
          <Link
            to="/professor/lecture/watchLecture"
            className={thirdSegment === "watchLecture" ? "in" : ""}
          >
            {" "}
            강의 등록{" "}
          </Link>
          <p />
          <Link
            to="/professor/lecture/watchMajor"
            className={thirdSegment === "watchMajor" ? "in" : ""}
          >
            {" "}
            전공 보기{" "}
          </Link>
          <p />
          <Link
            to="/professor/lecture/myLecture"
            className={thirdSegment === "myLecture" ? "in" : ""}
          >
            {" "}
            내 강의 목록{" "}
          </Link>
        </>
      )}
      <DropdownContent>
        {role === "STUDENT" && (
          <>
            <Link
              to="/student/lecture/sendLecture"
              className={thirdSegment === "sendLecture" ? "in" : ""}
            >
              {" "}
              수강 신청 보기
            </Link>
            <p />
            <Link
              to="/student/lecture/myLecture"
              className={thirdSegment === "myLecture" ? "in" : ""}
            >
              {" "}
              내 강의 목록{" "}
            </Link>
          </>
        )}
      </DropdownContent>
    </>
  );
};

export default LectureService;
