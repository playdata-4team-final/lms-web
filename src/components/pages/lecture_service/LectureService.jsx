import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";


const LectureService = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];

    return (<>
            <Link to="/student/lecture/sendLecture" className={thirdSegment === 'sendLecture' ? 'in' : ''}> 수강 신청 </Link>
            <Link to="/student/lecture/myLecture" className={thirdSegment === 'myLecture' ? 'in' : ''}> 내 강의 </Link>

        </>
    );
}

export default LectureService;