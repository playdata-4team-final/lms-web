import {Link, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {roleSelector} from "../../global/atom/LoginAtom";

const AcceptService = () => {

    const role = useRecoilValue(roleSelector);
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];



    return < >
        {role === "ADMIN" && (
            <>
                <Link to="/admin/accept/acceptMajor" className={thirdSegment === 'acceptMajor' ? 'in' : ''}> 전공 관리 </Link>
                <Link to="/admin/accept/acceptLecture" className={thirdSegment === 'acceptLecture' ? 'in' : ''}> 강의 관리 </Link>
            </>)
        }

        {role === "PROFESSOR" && (
            <>
                <Link to="/professor/accept/acceptLecture" className={thirdSegment === 'acceptLecture' ? 'in' : ''}> 강의 관리 </Link>
            </>)
        }

    </>
}

export default AcceptService;