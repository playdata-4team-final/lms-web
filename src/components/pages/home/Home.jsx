import React from "react";
import styles from "../../../styles/components/pages/home/Home.module.css";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <HomeMain />
      <div className={styles.button_container}></div>
    </div>
  );
};

export default Home;
