import React from "react";
import AdminBox from "../../right_box/AdminBox";
import StudentBox from "../../right_box/StudentBox";
import ProfessorBox from "../../right_box/ProfessorBox";
import { useRecoilValue } from "recoil";
import { roleAtom } from "../../../global/atom/LoginAtom";

const GlobalContentBox = () => {
  const role = useRecoilValue(roleAtom);
  return (
    <>
      <div className="main_sidebar">
        {role === "ADMIN" && (
          <div className="_sidebar">
            <AdminBox />
          </div>
        )}
        {role === "STUDENT" && (
          <div className="_sidebar">
            <StudentBox />
          </div>
        )}
        {role === "PROFESSOR" && (
          <div className="_sidebar">
            <ProfessorBox />
          </div>
        )}
      </div>
    </>
  );
};
export default GlobalContentBox;
