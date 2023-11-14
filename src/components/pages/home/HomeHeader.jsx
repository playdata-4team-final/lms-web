import styles from "../../../styles/components/pages/home/HomeHeader.module.css";
import HomeLogo from "../../atoms/HomeLogo";

import HomeNav from "./HomeNav";

const HomeHeader = () => {
  return (
    <div className={styles.header_container}>
      <HomeLogo />
      <HomeNav />
    </div>
  );
};

export default HomeHeader;
