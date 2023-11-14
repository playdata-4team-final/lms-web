import React from "react";
import AdminBox from "../../right_box/AdminBox";
import StudentBox from "../../right_box/StudentBox";
import ProfessorBox from "../../right_box/ProfessorBox";

const GlobalContentBox = () => {
  const user = { id: 1, name: "오성", role: "ADMIN" };

  return (
    <>
      <div className="main_sidebar">
        {user && user.role === "ADMIN" && (
          <div className="_sidebar">
            <AdminBox />
          </div>
        )}
        {user && user.role === "STUDENT" && (
          <div className="_sidebar">
            <StudentBox />
          </div>
        )}
        {user && user.role === "PROFESSOR" && (
          <div className="_sidebar">
            <ProfessorBox />
          </div>
        )}
      </div>
    </>
  );
};

export default GlobalContentBox;
