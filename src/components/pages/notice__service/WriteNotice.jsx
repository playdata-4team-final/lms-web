import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {api} from "../../api/api"; // jwt-decode 라이브러리를 사용합니다.

const WriteNotice = () => {

    const [user, setUser] = useState({
        id: "7d6f858a-d8bd-4074-8c6e-d9c47e21b1a6",
        role: "ADMIN"
    });

    const currentDate = new Date();

    const [formData, setFormData] = useState({
        title: '',
        updateTime: '',
        upLoadTime: '',
        email: '',
        content: '',
        fileUrl: ''
    });

    const [myEmail, setMyEmail] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = "john.doe@example.com";
                setMyEmail(data);
            } catch (error) {
                console.error('Error fetching email:', error);
            }
        };
        fetchData();
    }, []);

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
            adminId: user.id,
            email: myEmail,
            title: formData.title,
            createAt: formData.upLoadTime ,
            content: formData.content,
            fileUrl: formData.fileUrl
        };


        const adminResponse = await api('/api/v1/board/createNotice', 'POST', NoticeCreateRequest)
        console.log(adminResponse);

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
                {user && (user.role === 'ADMIN') && (
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
                                <label htmlFor="file">파일 업로드:</label>
                                <textarea
                                    id="file"
                                    name="file"
                                    value={formData.fileUrl}
                                    onChange={handleChange}
                                />
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