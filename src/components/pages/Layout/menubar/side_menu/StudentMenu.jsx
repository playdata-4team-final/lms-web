import React, { useState } from 'react';
import MailMenu from './in_menu/MailMenu'; // MailMenu 컴포넌트 import
import NoticeMenu from "./in_menu/NoticeMenu";
import LectureMenu from "./in_menu/LectureMenu"; // AcceptMenu 컴포넌트 import

const StudentMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const openModal = (menu) => {
        if (selectedMenu === menu)
            setSelectedMenu(null)
        else
            setSelectedMenu(menu);
    };

    return (
        <div>
            <div onClick={() => openModal('mail')}>메일 서비스</div>
            {selectedMenu === 'mail' && (
                <div className="modal">
                    <div className="modal-content">
                        {/* <span className="close" onClick={closeModal}>&times;</span> */}
                        <MailMenu />
                    </div>
                </div>
            )}
            <div onClick={() => openModal('lecture')}>강의 서비스</div>
            {selectedMenu === 'lecture' && (
                <div className="modal">
                    <div className="modal-content">
                        {/* <span className="close" onClick={closeModal}>&times;</span> */}
                        <LectureMenu />
                    </div>
                </div>
            )}
            <div onClick={() => openModal('notice')}>공지사항</div>
            {selectedMenu === 'notice' && (
                <div className="modal">
                    <div className="modal-content">
                        {/* <span className="close" onClick={closeModal}>&times;</span> */}
                        <NoticeMenu />
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentMenu;
