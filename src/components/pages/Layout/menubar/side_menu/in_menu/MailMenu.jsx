
import React from 'react';
import {Link, useLocation} from "react-router-dom";

const MailMenu = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const thirdSegment = pathSegments[3];

    return (<>
            {
            <Link to="/admin/mail/writeMail" className={thirdSegment === 'writeMail' ? 'in' : ''}> 메일 작성 </Link>
            <Link to="/admin/mail/watchMail" className={thirdSegment === 'watchMail' ? 'in' : ''}> 내 메일함 </Link>
            }
{
            <Link to="/professor/mail/writeMail" className={thirdSegment === 'writeMail' ? 'in' : ''}> 메일 작성 </Link>
            <Link to="/professor/mail/watchMail" className={thirdSegment === 'watchMail' ? 'in' : ''}> 내 메일함 </Link>
}
    <Link to="/student/mail/writeMail" className={thirdSegment === 'writeMail' ? 'in' : ''}> 메일 작성 </Link>
            <Link to="/student/mail/watchMail" className={thirdSegment === 'watchMail' ? 'in' : ''}> 내 메일함 </Link>

        </>
    );
};

export default MailMenu;

