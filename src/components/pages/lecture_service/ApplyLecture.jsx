import React, {useEffect, useState} from 'react';
import { api } from '../../api/api';

const ApplyLecture = () => {
    const [lectureName, setLectureName] = useState('');
    const [score, setScore] = useState('');
    const [semester, setSemester] = useState("FIRST");
    const [maximumNumber, setMaximumNumber] = useState('');
    const [lectureComment, setLectureComment] = useState('');
    const [selectedLectures, setSelectedLectures] = useState([]);
    const [user, setUser] = useState({
        id: "7d6f858a-d8bd-4074-8c6e-d9c47e21b1a6",
        role: "ADMIN",
        majorId: 3
    });
    const [lectures, setLectures] = useState([]);


    const handleCallLecture = async  () => {

        const response = await api(`/api/v1/lecture/findLecture/${user.id}`, 'GET');
        console.log(user.id)
        try{
        if (response.data.errorMsg === '') {
            alert('강의 조회 성공!');
            setLectures(response.data.data);

        } else {
            alert('강의 조회 실패:', response.statusText);
        }
    } catch (error) {
        alert('Error applying for lecture:', error);
    }
    }

    const handleDeleteSelectedLectures = async () => {
        try {
            const response = await api('api/v1/lecture/cancelLecture', 'POST', { lectureIds: selectedLectures.map(lecture => lecture.id) });
            console.log(response.data)
            if (response.data.errorMsg === '') {
                alert('강의 요청 삭제 성공!');
            } else {
                alert('강의 요청 삭제 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error deleting mails:', error);
        }
    };

    useEffect(() => {
        handleCallLecture();
    }, []);

    const handleCheckboxChange = (event, lecture) => {
        if (event.target.checked) {
            setSelectedLectures(prevSelected => [...prevSelected, lecture]);
        } else {
            setSelectedLectures(prevSelected => prevSelected.filter(selectedLecture => selectedLecture.id !== lecture.id));
        }
    }

    const handleApplyLecture = async (e) => {
        e.preventDefault();

        const LectureRequest = {
            lectureName: lectureName,
            professorId: user.id,
            majorId: user.majorId, //전체 전공 조회에서 이름으로 고르기.
            lectureComment: lectureComment,
            maximumNumber: maximumNumber,
            score: score,
            semester: semester
        };


        try {
            // 강의 등록 API 호출
            const response = await api(`/api/v1/lecture/requestLecture`, 'POST', LectureRequest);

            // API 응답 처리
            if (response.data.errorMsg === '') {
                alert('강의 등록 성공!');
            } else {
                alert('강의 등록 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error applying for lecture:', error);
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="lectureName">강의 이름:</label>
                <input
                    type="text"
                    id="lectureName"
                    value={lectureName}
                    onChange={(e) => setLectureName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="professorId">교수 ID:</label>
                <input
                    type="text"
                    id="professorId"
                    value={user.id}
                    readOnly={true}
                />
            </div>
            <div>
                <label htmlFor="majorId">전공 ID:</label>
                <input
                    type="text"
                    id="majorId"
                    value={user.majorId} //전체 전공에서 조회해오는 api로 요청할거임.
                />
            </div>
            <div>
                <label htmlFor="lectureComment">강의 설명:</label>
                <input
                    type="text"
                    id="lectureComment"
                    value={lectureComment}
                    onChange={(e) => setLectureComment(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="maximumNumber">최대 인원:</label>
                <input
                    type="number"
                    id="maximumNumber"
                    value={maximumNumber}
                    onChange={(e) => setMaximumNumber(parseInt(e.target.value, 10))}
                />
            </div>
            <div>
                <label htmlFor="score">학점:</label>
                <input
                    type="number"
                    id="score"
                    value={score}
                    onChange={(e) => setScore(parseInt(e.target.value, 10))}
                />
            </div>
            <label htmlFor="maximumNumber">최대 인원:</label>
            <select
                id="semester"
                value={semester}
                onChange={(e) => {
                    const selectedSemester = e.target.value;
                    if (selectedSemester === "FIRST" || selectedSemester === "SECOND") {
                        setSemester(selectedSemester);
                    }
                }}
            >
                <option value="FIRST">1학기</option>
                <option value="SECOND">2학기</option>
            </select>


            <button onClick={handleApplyLecture}>강의 등록</button>
            <div>
                <div>요청 강의</div>
                <table>
                    <thead>
                    <tr>
                        <th>강의코드</th>
                        <th>강의 이름</th>
                        <th>상태</th>
                        <th>최대 인원</th>
                        <th>학점</th>
                        <th>강의 설명</th>
                        <th>강의 날짜</th>
                        <th>학기</th>
                        <th>전공 이름</th>
                        <th>교수 이름</th>
                        <th>상태</th>
                    </tr>
                    </thead>
                    <tbody>

                    {lectures.map((lecture) => (
                        <tr key={lecture.id}>
                            <td>{lecture.id}</td>
                            <td>{lecture.lectureName}</td>
                            <td>{lecture.status}</td>
                            <td>{lecture.maximumNumber}</td>
                            <td>{lecture.score}</td>
                            <td>{lecture.lectureComment}</td>
                            <td>{lecture.lectureDate}</td>
                            <td>{lecture.semester}</td>
                            <td>{lecture.majorName}</td>
                            <td>{lecture.professorName}</td>
                            <td>{lecture.status}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={(event) => handleCheckboxChange(event, lecture)}
                                    checked={selectedLectures.some(selectedLecture => selectedLecture.id === lecture.id)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={handleDeleteSelectedLectures}>삭제</button>
            </div>
        </div>


    );
};

export default ApplyLecture;
