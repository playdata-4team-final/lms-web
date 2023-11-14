import React from "react";
import styles from "../../../styles/components/pages/home/ServiceButton.module.css";

import { useNavigate } from "react-router-dom";
const ServiceButton = ({ content, redirect }) => {
  const nav = useNavigate();

  const onClickHandler = () => nav(redirect);

  return (
    <button onClick={onClickHandler} className={styles.button_wrap}>
      {content}
    </button>
  );
};

export default ServiceButton;
