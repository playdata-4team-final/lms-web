import React, { useState } from 'react';
import MailMenu from './in_menu/MailMenu';
import NoticeMenu from "./in_menu/NoticeMenu";
import LectureService from "../../../lecture_service/LectureService";

const ProfessorMenu = () => {
    const [mailModal, setMailModal] = useState(false);
    const [lectureModal, setLectureModal] = useState(false);
    const [noticeModal, setNoticeModal] =useState(false);

    const handleMailClick = () => {
        setMailModal(true);
    }

    const handleLectureClick = () => {
        setLectureModal(true);
    }

    const handleNoticeClick = () => {
        setNoticeModal(true);
    }

    const handleLectureCloseModal = () => {
        setLectureModal(false);
    }

    const handleMailCloseModal = () => {
        setMailModal(false);

    }

    const handleNoticeCloseModal = () => {
        setNoticeModal(false);
    }

    return (
        <div>
            <div onClick={handleMailClick}>
                MailMenu
            </div>
            <div onClick={handleLectureClick}>
                LectureMenu
            </div>
            <div onClick={handleNoticeClick}>
                NoticeMenu
            </div>

            {mailModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleMailCloseModal}>&times;</span>
                        <MailMenu />
                    </div>
                </div>
            )}

            {mailModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleLectureCloseModal}>&times;</span>
                        <LectureService />
                    </div>
                </div>
            )}

            {mailModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleNoticeCloseModal}>&times;</span>
                        <NoticeMenu />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfessorMenu;
