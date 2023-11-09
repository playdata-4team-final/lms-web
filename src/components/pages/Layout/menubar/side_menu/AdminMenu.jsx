import React, { useState } from 'react';
import MailMenu from './in_menu/MailMenu';
import AcceptMenu from './in_menu/AcceptMenu';
import NoticeMenu from './in_menu/NoticeMenu';

const AdminMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const openModal = (menu) => {
        if (menu === selectedMenu)
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
            <div onClick={() => openModal('accept')}>관리 서비스</div>
            {selectedMenu === 'accept' && (
                <div className="modal">
                    <div className="modal-content">
                        {/* <span className="close" onClick={closeModal}>&times;</span> */}
                        <AcceptMenu />
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
};

export default AdminMenu;
