import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";


const LectureService = () => {

    const [user, setUser] = useState();
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];

    useEffect(() => {
        const token = { role: "PROFESSOR" }
        setUser(token);
    }, []);


    return (
            <>
                {user && user.role === 'ADMIN' && (
                    <div className="admin-lecture">
                        <Link to="/admin/accept/acceptMajor" className={thirdSegment === 'acceptMajor' ? 'in' : ''}> 전공 허가 </Link><p />
                        <Link to="/admin/accept/acceptLecture" className={thirdSegment === 'acceptLecture' ? 'in' : ''}> 강의 허가 </Link>
                    </div>
                )}

                {user && user.role === 'PROFESSOR' && (
                    <div className="professor-lecture">
                        <Link to="/professor/lecture/watchLecture" className={thirdSegment === 'watchLecture' ? 'in' : ''}> 강의 등록 </Link><p />
                        <Link to="/professor/lecture/watchMajor" className={thirdSegment === 'watchMajor' ? 'in' : ''}> 전공 보기 </Link><p />
                        <Link to="/professor/lecture/myLecture" className={thirdSegment === 'myLecture' ? 'in' : ''}> 내 강의 목록 </Link>
                    </div>
                )}

                {user && user.role === 'STUDENT' && (
                    <div className="student-lecture">
                        <Link to="/student/lecture/sendLecture" className={thirdSegment === 'sendLecture' ? 'in' : ''}> 수강 신청 보기</Link><p />
                        <Link to="/student/lecture/myLecture" className={thirdSegment === 'myLecture' ? 'in' : ''}> 내 강의 목록 </Link>
                    </div>
                )}
            </>

    );
}

export default LectureService;