import React, {useEffect, useState} from 'react';
import { api } from '../../api/api';

const ApplyMajor = () => {
    const [majorName, setMajorName] = useState('');
    const [isMajor, setIsMajor] = useState(false);
    const [checkMajor, setCheckMajor] = useState( false);
    const [user, setUser] = useState({
        id: "7d6f858a-d8bd-4074-8c6e-d9c47e21b1a6",
        role: "ADMIN"
    });
    const [majors, setMajors] = useState([]);
    const [selectedMajors, setSelectedMajors] = useState([]);

    const handleCallMajor = async  () => {

        const response = await api(`/api/v1/lecture/findMajor/${user.id}`, 'GET');
        try{
            if (response.data.errorMsg === '') {
                alert('전공 조회 성공!');
                setMajors(response.data.data);

            } else {
                alert('전공 조회 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error applying for lecture:', error);
        }
    }

    const handleCheckboxChange = (event, major) => {
        if (event.target.checked) {
            setSelectedMajors(prevSelected => [...prevSelected, major]);
        } else {
            setSelectedMajors(prevSelected => prevSelected.filter(selectedmajor => selectedmajor.id !== major.id));
        }
    }


    useEffect(() => {
        handleCallMajor();
    }, []);

    const handleApplyMajor = async (e) => {
        e.preventDefault();

        const ProfessorMajorRequest = {
            professorId: user.id,
            majorName: majorName,
            checkMajor: checkMajor
        };

        try {
            // 전공 신청 API 호출
            const response = await api(`/api/v1/lecture/requestMajor`, 'POST', ProfessorMajorRequest);

            // API 응답 처리
            if (response.data.errorMsg === '') {
                alert('전공 신청 성공!');

            } else {
                alert('전공 신청 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error applying for major:', error);
        }
    };

    const handleDeleteSelectedMajors = async () => {
        try {
            const response = await api('api/v1/lecture/cancelMajor', 'POST', { majorIds: selectedMajors.map(major => major.id) });
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

    return (
        <div>
            <div>
                <label htmlFor="majorName">전공 이름:</label>
                <input
                    type="text"
                    id="majorName"
                    value={majorName}
                    onChange={(e) => setMajorName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="isMajor">전공 유무:</label>
                <input
                    type="checkbox"
                    id="isMajor"
                    checked={isMajor}
                    onChange={(e) => {
                        setIsMajor(e.target.checked);
                        setCheckMajor(e.target.checked);
                    }}
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
            <button onClick={handleApplyMajor}>전공 신청</button>
            <div>
                <div>요청 강의</div>
                <table>
                    <thead>
                    <tr>
                        <th>전공 코드</th>
                        <th>교수 ID</th>
                        <th>전공 이름</th>
                        <th>전공 유무</th>
                        <th>상태</th>
                    </tr>
                    </thead>
                    <tbody>

                    {majors.map((major) => (
                        <tr key={major.id}>
                            <td>{major.id}</td>
                            <td>{major.professorId}</td>
                            <td>{major.majorName}</td>
                            <td>{major.checkMajor}</td>
                            <td>{major.status}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={(event) => handleCheckboxChange(event, major)}
                                    checked={selectedMajors.some(selectedMajor => selectedMajor.id === major.id)}
                                />
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
                <button onClick={handleDeleteSelectedMajors}>삭제</button>
            </div>
        </div>
    );
};

export default ApplyMajor;
