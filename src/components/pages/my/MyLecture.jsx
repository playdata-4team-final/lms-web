import React from "react";
import styled from "styled-components";

const LectureContainer = styled.div`
  position: relative;
  padding: 12px 24px;
`;
const MyLectureWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;
const MyLecture = () => {
  return (
    <LectureContainer>
      <MyLectureWrap>
        <table>
          <thead>
            <tr>
              <th>내강의 목록</th>
              <th>보낸 사람</th>
              <th>보낸 날짜</th>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          {/* Add your table body content here */}
          <tbody>{/* Add your table rows here */}</tbody>
        </table>
      </MyLectureWrap>
    </LectureContainer>
  );
};

export default MyLecture;
