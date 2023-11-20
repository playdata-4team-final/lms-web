import React from "react";
import styles from "../../../styles/components/pages/home/Home.module.css";
import { useRecoilValue } from "recoil";
import { roleSelector } from "../../global/atom/LoginAtom";
import HomeMain from "./HomeMain";

const Home = () => {
  const role = useRecoilValue(roleSelector);
  console.log("권한: " + role);
  return (
    <div className={styles.home_container}>
      <HomeMain />
      <div className={styles.button_container}></div>
    </div>
  );
};

export default Home;
