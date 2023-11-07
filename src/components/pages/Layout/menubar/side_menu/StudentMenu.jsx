import React, { useState } from 'react';
import MailMenu from './in_menu/MailMenu'; // MailMenu 컴포넌트 import
import AcceptMenu from './in_menu/AcceptMenu'; // AcceptMenu 컴포넌트 import

const StudentMenu = () => {
    const [mailModal, setMailModal] = useState(false);

    const handleMailClick = () => {
        setMailModal(true);
    }

    const handleCloseModal = () => {
        setMailModal(false);
    }

    return (
        <div>
            <div onClick={handleMailClick}>
                MailMenu
            </div>
            <div onClick={handleMailClick}>
                LectureMenu
            </div>
            <div onClick={handleMailClick}>
                NoticeMenu
            </div>

            {mailModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <MailMenu />
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentMenu;
