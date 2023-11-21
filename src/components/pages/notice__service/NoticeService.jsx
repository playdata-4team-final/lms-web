import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {useRecoilValue} from "recoil";
import {roleAtom} from "../../global/atom/LoginAtom";

const NoticeService = () => {
    const role = useRecoilValue(roleAtom);
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];

    return (
        <div>
            <>
                {role === 'ADMIN' && (
                    <div className="admin-notice">
                        <Link to="/admin/notice/writeNotice " className={thirdSegment === 'writeNotice' ? 'in' : ''}>공지 작성</Link><p />
                        <Link to="/admin/notice/watchNotice" className={thirdSegment === 'watchNotice' ? 'in' : ''}>공지 보기</Link>
                    </div>
                )}

                {role === 'PROFESSOR' && (
                    <div className="professor-notice">
                        <Link to="/professor/notice/writeNotice" className={thirdSegment === 'writeNotice' ? 'in' : ''}>공지 작성</Link><p />
                        <Link to="/professor/notice/watchNotice" className={thirdSegment === 'watchNotice' ? 'in' : ''}>공지 보기</Link>
                    </div>
                )}

                {role === 'STUDENT' && (
                    <div className="student-notice">
                        <Link to="/professor/notice/watchNotice" className={thirdSegment === 'watchNotice' ? 'in' : ''}>공지 보기</Link>
                    </div>
                )}
            </>
        </div>
    );
};

export default NoticeService;