import React, { useState } from 'react';
import Modal from 'react-modal';
import {api} from "../../global/api/Api";

const FileUpload = ({noticeDetails}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [file, setFile] = useState(null);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await api('/api/v1/board/uploadNoticeFile', 'POST', formData);

            if (response.ok) {
                console.log('File uploaded successfully!');
            } else {
                console.error('Failed to upload file.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }

        closeModal();
    };

    return (
        <div>
            <div>
                첨부 파일: <a href={`/download/file?fileName=${encodeURIComponent(noticeDetails.fileUrl)}`} target="_blank">{noticeDetails.fileUrl}</a> <button onClick={openModal}>+</button>
            </div>
            <div></div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <h2>File Upload Form</h2>
                <form encType="multipart/form-data">
                    <input type="file" name="file" onChange={handleFileChange} />
                    <button type="button" onClick={handleUpload}>
                        Upload
                    </button>
                </form>
                <button type="button" onClick={closeModal}>
                    Close
                </button>
            </Modal>
        </div>
    );
};

export default FileUpload;