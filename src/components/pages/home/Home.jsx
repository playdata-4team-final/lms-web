import React, { useState } from 'react';
import App from "../../../App";
import {useRecoilValue} from "recoil";
import {roleSelector} from "../../global/atom/LoginAtom";

const Home = () => {
    const role = useRecoilValue(roleSelector);
    console.log("권한: "+role)
  return (
     <>
     </>
  );
};

export default Home;
