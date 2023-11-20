import React, { useEffect, useState } from 'react';
import {api} from "../../global/api/Api";
import {useRecoilValue} from "recoil";

import FileUpload from "./FileUpload";
import {idAtom, roleAtom} from "../../global/atom/LoginAtom";


const WriteNotice = () => {

    const [files, setFiles] = useState([]);
    const role = useRecoilValue(roleAtom);
    const currentDate = new Date();
    const initialFormData = {
        title: '',
        upLoadTime: currentDate,
        email: '',
        content: '',
    };

    const id = useRecoilValue(idAtom);

    const [formData, setFormData] = useState(initialFormData);

    const handleChange1 = (e) => {
        console.log(e)

        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

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
            adminId: id,
            email: formData.email,
            title: formData.title,
            createAt: formData.upLoadTime ,
            content: formData.content,
            noticeFiles:files
        };


        const adminResponse = await api('/api/v1/board/createNotice', 'POST', NoticeCreateRequest)
        console.log(NoticeCreateRequest)
        console.log(adminResponse)
        if (adminResponse.errorMsg === "") {
            alert('공지 작성 성공!');
            setFormData({
                title: '',
                email: '',
                content: '',
                noticeFiles:[]
            });
        } else {
            alert('공지 작성 실패!');
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
                                <label htmlFor="email">작성자 이메일:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="content">내용:</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange1}
                                />
                            </div>
                            <div>
                                <div>파일 업로드:</div>
                                <div>
                                    <FileUpload setFiles={setFiles} files={files}/>
                                </div>
                            </div>
                            <button type="submit" >보내기</button>
                        </form>
                    </div>
                )}

            </div>



        </>

    );
};

export default WriteNotice;