import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import cookie from "react-cookies";
import { Outlet } from "react-router";
import { tokenAtom } from "../atom/LoginAtom";

const GetRoleRoute = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  useEffect(() => {
    const myCookieValue = cookie.load("AccessToken");
    console.log(myCookieValue);
    setToken(myCookieValue);
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default GetRoleRoute;
