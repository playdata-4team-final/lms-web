import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {api} from "../../global/api/Api";

const GradeReportContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SubjectTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const AverageRow = styled(TableRow)`
  background-color: #ddd;
`;

const AverageCell = styled(TableCell)`
  font-weight: bold;
`;

const GetProfessorGrade = () => {

    const [grades, setGrades] = useState([]);
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedSemester, setSelectedSemester] = useState('first');
    const getGrade = async () => {
        const request = {
            "year" : selectedYear,
            "semester" : selectedSemester
        };
        const response = await api("/api/v1/grade","POST",request)
        setGrades(response.data);
        console.log(response);
        console.log(response.data);
    }
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleSemesterChange = (e) => {
        setSelectedSemester(e.target.value);
    };

    useEffect(() => {
        getGrade();
        console.log(selectedSemester)
    },[selectedYear,selectedSemester]);

    return (
        <div className={"_right-content"}>
            <GradeReportContainer>
                <div style={{ float: 'right', marginRight: '20px', marginTop: '20px' }}>
                    <label htmlFor="year">년도:</label>
                    <select id="year" value={selectedYear} onChange={handleYearChange}>
                        <option value="2023">2023년</option>
                        <option value="2022">2022년</option>
                    </select>
                    <label htmlFor="semester">학기:</label>
                    <select id="semester" value={selectedSemester} onChange={handleSemesterChange}>
                        <option value="first">1학기</option>
                        <option value="second">2학기</option>
                    </select>
                </div>
                <h2>강의 내역</h2>
                <SubjectTable>
                    <thead>
                    <TableRow>
                        <TableHeader>순번</TableHeader>
                        <TableHeader>강의명</TableHeader>
                        <TableHeader></TableHeader>
                        <TableHeader></TableHeader>
                        <TableHeader></TableHeader>
                    </TableRow>
                    </thead>
                    <tbody>
                    {grades.map((grade) => (
                        <TableRow key={grade.id}>
                            <TableCell>{grade.id}</TableCell>
                            <TableCell>{grade.lectureName}</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    ))}
                    </tbody>
                </SubjectTable>
            </GradeReportContainer>
        </div>
    );
};

export default GetProfessorGrade;