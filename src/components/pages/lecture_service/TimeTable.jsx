import React, { useEffect, useState } from "react";
import styles from "../../../styles/components/pages/my/Mypage.module.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../global/api/Api";
import MySidebar from "../my/MySidebar";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { roleAtom } from "../../global/atom/LoginAtom";

const TableContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    vertical-align: middle;

    &:hover {
      background-color: #f9f9f9;
    }
  }
`;

const ExampleTimetable = () => {
  const weeklyData = [
    {
      time: "1",
      monday: "Math",
      tuesday: "",
      wednesday: "English",
      thursday: "Science",
      friday: "Gym",
    },
    {
      time: "2",
      monday: "Math",
      tuesday: "Chemistry",
      wednesday: "English",
      thursday: "Science",
      friday: "Gym",
    },
    {
      time: "3",
      monday: "Math",
      tuesday: "Chemistry",
      wednesday: "English",
      thursday: "Science",
      friday: "",
    },
    {
      time: "4",
      monday: "Math",
      tuesday: "Chemistry",
      wednesday: "English",
      thursday: "",
      friday: "Music",
    },
    {
      time: "5",
      monday: "Physics",
      tuesday: "Chemistry",
      wednesday: "Biology",
      thursday: "",
      friday: "Music",
    },
    {
      time: "6",
      monday: "Physics",
      tuesday: "",
      wednesday: "Biology",
      thursday: "Geography",
      friday: "Music",
    },
    {
      time: "7",
      monday: "Physics",
      tuesday: "",
      wednesday: "Biology",
      thursday: "Geography",
      friday: "",
    },
    {
      time: "8",
      monday: "Physics",
      tuesday: "",
      wednesday: "Biology",
      thursday: "Geography",
      friday: "",
    },
  ];

  return <Timetable weeklyData={weeklyData} />;
};

const Timetable = ({ weeklyData }) => {
  const [user, setUser] = useState();
  const [notices, setNotices] = useState();
  const userRole = useRecoilValue(roleAtom);
  const nav = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = { role: "ADMIN", email: "john.doe@example.com" };
        setUser(token);

        const response = await api("api/v1/board/getAllNotices", "GET");
        console.log(response.data.data);
        setNotices(response.data.data);
      } catch (error) {
        alert("Error fetching user and notices:", error);
      }
    };

    fetchUser();
  }, []);

  const navigate = useNavigate();
  const handleSubjectClick = async (id) => {
    try {
      if (userRole === "PROFESSOR") {
        navigate(`/professor/notice/watchNotice/details/${id}`);
      } else if (userRole === "STUDENT") {
        navigate(`/student/notice/watchNotice/details/${id}`);
      }
      await handleWatchNoticeDetails(id);
    } catch (error) {
      console.error("Error handling title click:", error);
    }
  };

  const handleWatchNoticeDetails = async (id) => {
    console.log(id);
    try {
      const response = await api(`api/v1/board/getNotice/${id}`, "GET");
      console.log(response.data);
      if (response.data.errorMsg === "") {
        alert("공지사항 호출 성공!");
      } else {
        alert("공지사항 호출 실패:", response.statusText);
      }
    } catch (error) {
      alert("Error Watching Notice:", error);
    }
  };

  if (!weeklyData || !Array.isArray(weeklyData)) {
    return <div>No timetable data available</div>;
  }

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <>
      <div className={styles.my_page_container}>
        <MySidebar />
      </div>
      <div className={styles.my_page_lecture_container}>
        <div className={styles.my_page_lecture_container}>
          <h2>Weekly Timetable</h2>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Time</th>
                  {daysOfWeek.map((day, index) => (
                    <th key={index}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeklyData.map((rowData, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{rowData.time}</td>
                    {daysOfWeek.map((day, dayIndex) => (
                      <td key={dayIndex}>
                        {rowData[day.toLowerCase()]}
                        <div onClick={() => handleSubjectClick(rowData.id)}>
                          {rowData.name}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default ExampleTimetable;
