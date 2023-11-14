import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MailService = () => {
  const [user, setUser] = useState();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const thirdSegment = pathSegments[3];

  useEffect(() => {
    const token = { role: "PROFESSOR" };
    setUser(token);
  }, []);

  return (
    <div>
      <>
        {user && user.role === "STUDENT" && (
          <div className="student-mail">
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
          </div>
        )}

        {user && user.role === "ADMIN" && (
          <div className="admin-mail">
            <Link
              to="/student/mail/writeMail"
              className={thirdSegment === "writeMail" ? "in" : ""}
            >
              메일 작성
            </Link>
            <Link
              to="/student/mail/watchMail "
              className={thirdSegment === "watchMail" ? "in" : ""}
            >
              메일 보기
            </Link>
          </div>
        )}

        {user && user.role === "PROFESSOR" && (
          <div className="professor-mail">
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
          </div>
        )}
      </>
    </div>
  );
};

export default MailService;
