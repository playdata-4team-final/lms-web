import React from 'react';

const StudentMenu = () => {
    const [mailModal, setMailModal] = useState(false);

    return (
        <div>
            { <div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <MailMenu/>
            </div> }
            {<div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <StudentLectureMenu/>
            </div>}
            { <div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <ClassNoticeMenu/>
            </div>
            }
        </div>
    )
};

export default StudentMenu;

