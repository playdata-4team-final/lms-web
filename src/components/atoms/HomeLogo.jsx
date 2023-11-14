import React from "react";
import { SiAccusoft } from "react-icons/si";

import styles from "../../styles/components/atoms/HomeLogo.module.css";

const HomeLogo = () => {
  return (
    <div className={styles.logo_container}>
      <SiAccusoft size="30px" color="orange" />
      <h2> HeLMeS</h2>
    </div>
  );
};

export default HomeLogo;
