import React from "react";
import styles from "../../../styles/components/pages/my/Mypage.module.css";
import { useNavigate } from "react-router-dom";
import MySidebar from "./MySidebar";
import MyLecture from "./MyLecture";

const MyPage = () => {
  const nav = useNavigate();

  const goToEdit = () => {
    nav("/edit");
  };

  return (
    <>
      <div className={styles.my_page_container}>
        <MySidebar />
      </div>
      <div className={styles.my_page_lecture_container}>
        <h2>최웅진님, 환영합니다</h2>
        <div className={styles.my_page_text}>
          <span>
            HeLMeS는 학사 정보관리 시스템(LMS)로 강의를 신청하거나 스케줄을
            확인하고,
          </span>
        </div>
        <div className={styles.my_page_text}>
          <span>
            여러가지 공지사항들을 확인하실 수 있으시며 사용자의 편의에
            맞게사용하실 수 있습니다.
          </span>
        </div>
      </div>

      <div className={styles.my_img_container}>
        <img src="/images/다운로드.jpeg" alt="" />
        <img src="/images/다운로드.jpeg" alt="" />
      </div>
    </>
  );
};

export default MyPage;
