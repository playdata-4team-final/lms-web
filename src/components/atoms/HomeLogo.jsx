import React from "react";
import { SiAirtable } from "react-icons/si";

import styles from "../../styles/atoms/TableLogo.module.css";
const HomeLogo = () => {
  return (
    <div className={styles.logo_container}>
      <SiAirtable size="24px" color="orange" />
      <h3>HeLMeS</h3>
    </div>
  );
};

export default HomeLogo;
