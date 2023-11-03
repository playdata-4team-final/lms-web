import React, {useState} from 'react';

const AdminMenu = () => {

    const [mailModal, setMailModal] = useState(false);

    return (
        <div>
            { <div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <MailMenu/>
            </div> }
            {<div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <AdminLectureMenu/>
            </div>}
            { <div onMouseEnter={() => setMailModal(true)} onMouseLeave={() => setMailModal(false)}>
                <AdminNoticeMenu/>
            </div>
            }
        </div>
    );
};

export default AdminMenu;