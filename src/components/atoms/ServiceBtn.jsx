import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
const BtnWrap = styled.button`
  width: 45%;
  border: 1px solid black;
  border-radius: 10px;
  background: none;
  text-align: center;
`;

const ServiceBtn = ({ content, redirect }) => {
  const nav = useNavigate();

  const onClickHandler = () => nav(redirect);

  return <BtnWrap onClick={onClickHandler}>{content}</BtnWrap>;
};

export default ServiceBtn;
