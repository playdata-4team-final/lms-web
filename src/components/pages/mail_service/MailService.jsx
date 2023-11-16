import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {useRecoilValue} from "recoil";
import {roleSelector} from "../../global/atom/LoginAtom";


const MailService = () => {

    const role = useRecoilValue(roleSelector);
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];


    return (
        <div>

            <>
                {role === 'STUDENT' && (
                    <div className="student-mail">
                        <Link to="/student/mail/writeMail" className={thirdSegment === 'writeMail' ? 'in' : ''}>메일 작성</Link><p />
                        <Link to="/student/mail/watchMail" className={thirdSegment === 'watchMail' ? 'in' : ''}>메일 보기</Link>
                    </div>
                )}

                {role === 'ADMIN' && (
                    <div className="admin-mail">
                        <Link to="/student/mail/writeMail" className={thirdSegment === 'writeMail' ? 'in' : ''}>메일 작성</Link><p />
                        <Link to="/student/mail/watchMail " className={thirdSegment === 'watchMail' ? 'in' : ''}>메일 보기</Link>
                    </div>
                )}

                {role === 'PROFESSOR' && (
                    <div className="professor-mail">
                        <Link to="/professor/mail/writeMail" className={thirdSegment === 'writeMail' ? 'in' : ''}>메일 작성</Link><p />
                        <Link to="/professor/mail/watchMail" className={thirdSegment === 'watchMail' ? 'in' : ''}>메일 보기</Link>
                    </div>
                )}
            </>

        </div>
    );
};

export default MailService;
