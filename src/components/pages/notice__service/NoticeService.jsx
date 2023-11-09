import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NoticeService = () => {
    const [user, setUser] = useState();
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];

    useEffect(() => {
        const token = { role: "PROFESSOR" }
        setUser(token);
    }, []);

    return (
        <div>
            <>
                {user && user.role === 'ADMIN' && (
                    <div className="admin-notice">
                        <Link to="/admin/notice/writeNotice " className={thirdSegment === 'writeNotice' ? 'in' : ''}>공지 작성</Link><p />
                        <Link to="/admin/notice/watchNotice" className={thirdSegment === 'watchNotice' ? 'in' : ''}>공지 보기</Link>
                    </div>
                )}

                {user && user.role === 'PROFESSOR' && (
                    <div className="professor-notice">
                        <Link to="/professor/notice/writeNotice" className={thirdSegment === 'writeNotice' ? 'in' : ''}>공지 작성</Link><p />
                        <Link to="/professor/notice/watchNotice" className={thirdSegment === 'watchNotice' ? 'in' : ''}>공지 보기</Link>
                    </div>
                )}

                {user && user.role === 'STUDENT' && (
                    <div className="student-notice">
                        <Link to="/professor/notice/watchNotice" className={thirdSegment === 'watchNotice' ? 'in' : ''}>공지 보기</Link>
                    </div>
                )}
            </>
        </div>
    );
};

export default NoticeService;