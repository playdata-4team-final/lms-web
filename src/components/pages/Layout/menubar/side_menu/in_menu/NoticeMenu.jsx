import React from 'react';
import {Link, useLocation} from "react-router-dom";

const NoticeMenu = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];

    return (<>
            <Link to="/admin/notice/writeNotice" className={thirdSegment === 'writeNotice' ? 'in' : ''}> 공지사항 작성 </Link>
            <Link to="/admin/notice/watchNotice" className={thirdSegment === 'watchNotice' ? 'in' : ''}> 공지사항 보기 </Link>
        </>
    );
};

export default NoticeMenu;

