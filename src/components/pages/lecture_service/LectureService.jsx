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


    return (<>
        {user && user.role !== 'ADMIN' && (
            <>
                {user && user.role === 'PROFESSOR' && (
                    <div className="professor-lecture">
                        <Link to="/professor/lecture/applyLecture" className={thirdSegment === 'applyLecture' ? 'in' : ''}> 강의 등록 </Link><p />
                        <Link to="/professor/lecture/myLecture" className={thirdSegment === 'myLecture' ? 'in' : ''}> 내 강의 </Link>
                    </div>
                )}

                {user && user.role === 'STUDENT' && (
                    <div className="student-lecture">
                        <Link to="/student/lecture/sendLecture" className={thirdSegment === 'sendLecture' ? 'in' : ''}> 수강 신청 </Link><p />
                        <Link to="/student/lecture/myLecture" className={thirdSegment === 'myLecture' ? 'in' : ''}> 내 강의 </Link>
                    </div>
                )}
            </>
        )}
    </>

    );
}

export default LectureService;