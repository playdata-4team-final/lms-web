import React from 'react';
import {useRecoilValue} from "recoil";
import {roleAtom} from "../../global/atom/LoginAtom";
import {Link, useLocation} from "react-router-dom";

const GradeService = () => {
    const role = useRecoilValue(roleAtom);
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];
    return (
        <div>
            {role && role === 'STUDENT' && (
                <div className="">
                    <Link to="/student/grade/get" className={thirdSegment === 'get' ? 'in' : ''}>성적 조회</Link><p />
                </div>
            )}
            {role && role === 'PROFESSOR' && (
                <>
                    <div className="">
                        <Link to="/professor/grade/set" className={thirdSegment === 'set' ? 'in' : ''}>성적 입력</Link><p />
                    </div>
                    <div className="">
                        <Link to="/professor/grade/update" className={thirdSegment === 'update' ? 'in' : ''}>성적 수정</Link><p />
                    </div>
                </>
            )}
        </div>
    );
};

export default GradeService;