import React from "react";
import styles from "../../../styles/components/pages/home/Home.module.css";
import HomeHeader from "./HomeHeader";

import HomeMain from "./HomeMain";
import Cursor from "../../atoms/Cursor";
import Calendar from "../../atoms/Calander";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Cursor />
      <HomeHeader />
      <HomeMain />

      <div className={styles.button_container}></div>
    </div>
  );
};

export default Home;
