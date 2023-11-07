
import React from 'react';
import {Link, useLocation} from "react-router-dom";

const AcceptMenu = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];

    return (<>
            <Link to="/admin/accept/acceptMajor" className={thirdSegment === 'acceptMajor' ? 'in' : ''}> 전공 관리 </Link>
            <Link to="/admin/accept/acceptLecture" className={thirdSegment === 'acceptLecture' ? 'in' : ''}> 강의 관리 </Link>
        </>
    );
};

export default AcceptMenu;
