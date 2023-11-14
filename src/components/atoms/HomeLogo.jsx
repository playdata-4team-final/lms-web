import React from "react";
import { SiAccusoft } from "react-icons/si";

import styles from "../../styles/components/atoms/HomeLogo.module.css";
const HomeLogo = () => {
  return (
    <div className={styles.logo_container}>
      <SiAccusoft size="24px" color="orange" />
      <h3>HeLMeS</h3>
    </div>
  );
};

export default HomeLogo;
