import React, { useState, useEffect } from 'react';
import {api} from "../../api/api";


const WriteMail = () => {
    const [user, setUser] = useState({
        id: "7d6f858a-d8bd-4074-8c6e-d9c47e21b1a6",
        role: "PROFESSOR",
        majorId: 1
    });
    const [formData, setFormData] = useState({
        title: '',
        email: '',
        content: '',
        majorId: ''
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

    const handleProfessorSubmit = async (e) => {
        e.preventDefault();

        const sendGroupRequest = {
            title: formData.title,
            message: formData.content,
            senderEmail: myEmail,
            majorId: user.majorId
        };


        const professorResponse = await api('/api/v1/mail/sendGroupMailByProfessor', 'POST', sendGroupRequest)
        console.log(professorResponse.data)
        if (professorResponse.data.errorMsg  === "") {
            alert('쪽지 전송 성공!');
            setFormData({
                title: '',
                email: '',
                content: '',
                majorId: ''
            });
        } else {
            alert('쪽지 전송 실패');
            setFormData({
                title: '',
                email: '',
                content: '',
                majorId: ''
            });
        }


    }

    const handleStudentSubmit = async (e) => {
        e.preventDefault();
        const sendRequest = {
            title: formData.title,
            senderEmail: myEmail,
            receiverEmail: formData.email, //얘는 api로 user의 email을 직접찾아와야함.
            message: formData.content,
            majorId: user.majorId
        };

        const sendGroupRequest = {
            title: formData.title,
            senderEmail: myEmail,
            majorId: user.majorId
        };


        const studentResponse = await api('/api/v1/mail/sendMail', 'POST', sendRequest)


        if (studentResponse.data.errorMsg === "") {
            alert('쪽지 전송 성공!');
            setFormData({
                title: '',
                email: '',
                content: '',
                majorId: ''
            });
        } else {
            alert('쪽지 전송 실패');
            setFormData({
                title: '',
                email: '',
                content: '',
                majorId: ''
            });
        }


    }

    const handleAdminSubmit = async (e) => {
        e.preventDefault();

        const sendGroupRequest = {
            title: formData.title,
            senderEmail: myEmail,
            message: formData.content,
            majorId: user.majorId
        };


        const adminResponse = await api('/api/v1/mail/sendGroupMailToAllUser', 'POST', sendGroupRequest)

        if (adminResponse.data.errMsg === null) {
            alert('쪽지 전송 성공!');
            setFormData({
                title: '',
                email: '',
                content: '',
                majorId: ''
            });
        } else {
            alert('쪽지 전송 실패');
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
                    <div>쪽지 쓰기</div>
                    <form onSubmit={handleAdminSubmit}>
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
                        <div>
                            <label htmlFor="email">작성자 이메일:</label>
                            <input
                                id="email"
                                name="email"
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
                        <button type="submit">보내기</button>
                    </form>
                </div>
            )}

            {user && (user.role === 'STUDENT') && (
                <div className="_right-content">
                    <div>쪽지 쓰기</div>
                    <form onSubmit={handleStudentSubmit}>
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
                        <div>
                            <label htmlFor="email">작성자 이메일:</label>
                            <input
                                id="email"
                                name="email"
                                value={myEmail}
                                readOnly={true}
                            />
                        </div>
                        <div>
                                <label htmlFor="targetEmail">대상 이메일:</label>
                                <input
                                    id="targetEmail"
                                    name="targetEmail"
                                    value={formData.targetEmail}
                                    onChange={handleChange}/>
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
                        <button type="submit">보내기</button>
                    </form>
                </div>
            )}

            {user && (user.role === 'PROFESSOR') && (
                <div className="_right-content">
                    <div>쪽지 쓰기</div>
                    <form onSubmit={handleProfessorSubmit}>
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
                        <div>
                            <label htmlFor="email">작성자 이메일:</label>
                            <input
                                id="email"
                                name="email"
                                value={myEmail}
                                readOnly={true}
                            />
                        </div>
                        <div>
                            <label htmlFor="targetEmail">전공 ID:</label>
                            <input
                                    id="targetMajorId"
                                    name="targetMajorId"
                                    value={formData.targetMajorId}
                                    onChange={handleChange}
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
                        <button type="submit">보내기</button>
                    </form>
                </div>
            )}
        </div>



        </>

    );

}
    export default WriteMail;
