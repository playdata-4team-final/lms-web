import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {api} from "../../global/api/Api";
import {useRecoilValue} from "recoil";
import {roleSelector} from "../../global/atom/LoginAtom";
import FileUpload from "./FileUpload";


const WriteNotice = () => {

    const role = useRecoilValue(roleSelector);
    const currentDate = new Date();
    const [myEmail, setMyEmail] = useState(); //이거 작성자 이메일 찾아와야함.

    const [formData, setFormData] = useState({
        title: '',
        updateTime: '',
        upLoadTime: '',
        email: '',
        content: '',
        fileUrl: ''
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const NoticeCreateRequest = {
            adminId: "",
            email: myEmail,
            title: formData.title,
            createAt: formData.upLoadTime ,
            content: formData.content,
            fileUrl: formData.fileUrl
        };


        const adminResponse = await api('/api/v1/board/createNotice', 'POST', NoticeCreateRequest)

        if (adminResponse.data.errorMsg === "") {
            alert('공지 작성 성공!');
            setFormData({
                title: '',
                email: '',
                content: '',
                majorId: ''
            });
        } else {
            alert('공지 작성 실패!');
            setFormData({
                title: '',
                email: '',
                content: '',
                majorId: ''
            });
        }


    }

    return (<>
            <div>
                {(role === 'ADMIN') && (
                    <div className="_right-content">
                        <div>공지작성</div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title">제목:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type="text"
                                id="upLoadTime"
                                name="upLoadTime"
                                value={formData.upLoadTime = currentDate} readOnly={true}
                            />
                            <div>
                                <label htmlFor="notice">작성자 이메일:</label>
                                <input
                                    id="notice"
                                    name="notice"
                                    value={myEmail}
                                    readOnly={true}
                                />
                            </div>
                            <div>
                                <label htmlFor="content">내용:</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div>파일 업로드:</div>
                                <div>
                                    <FileUpload noticeDetails={noticeDetails}/>
                                </div>
                            </div>
                            <button type="submit">보내기</button>
                        </form>
                    </div>
                )}

            </div>



        </>

    );
};

export default WriteNotice;