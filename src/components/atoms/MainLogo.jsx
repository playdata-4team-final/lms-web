import React from "react";
import styles from "../../styles/components/atoms/HomeLogo.module.css";

const MainLogo = () => {
  return (
    <div className={styles.logo_container}>
      {/* 절대 경로로 이미지를 로드합니다. */}
      <img src="/images/lms.jpg" alt="lms" />
    </div>
  );
};

export default MainLogo;
