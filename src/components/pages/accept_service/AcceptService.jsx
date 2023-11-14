import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const AcceptService = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const thirdSegment = pathSegments[3];

  useEffect(() => {
    const token = { role: "PROFESSOR" };
    setUser(token);
  }, []);

  return (
    <>
      {user && user.role === "ADMIN" && (
        <>
          <Link
            to="/admin/accept/acceptMajor"
            className={thirdSegment === "acceptMajor" ? "in" : ""}
          >
            {" "}
            전공 관리{" "}
          </Link>
          <Link
            to="/admin/accept/acceptLecture"
            className={thirdSegment === "acceptLecture" ? "in" : ""}
          >
            {" "}
            강의 관리{" "}
          </Link>
        </>
      )}

      {user && user.role === "PROFESSOR" && (
        <>
          <Link
            to="/professor/accept/acceptLecture"
            className={thirdSegment === "acceptLecture" ? "in" : ""}
          >
            {" "}
            강의 관리{" "}
          </Link>
        </>
      )}
    </>
  );
};

export default AcceptService;
