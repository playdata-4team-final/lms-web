import React from "react";
import styles from "../../styles/atoms/BigOrangeBtton.module.css";
const BigOrangeButton = ({ content, onClickHandler }) => {
  return (
    <button className={styles.big_color_btn} onClick={onClickHandler}>
      {content}
    </button>
  );
};

export default BigOrangeButton;
