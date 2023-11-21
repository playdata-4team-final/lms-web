
import React, { useEffect, useState } from 'react';

import "./WatchMail.css";
import {api} from "../../global/api/Api";


const WatchMail = () => {
    const [user, setUser] = useState();
    const [mails, setMails] = useState([]);
    const [selectedMails, setSelectedMails] = useState([]);


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = { id: 1, name: "오성", role: "PROFESSOR", email: "john.doe@example.com", majorId: 1 };
                setUser(token);

                const watchRequest = {
                    receiverEmail: token.email,
                    majorId: token.majorId
                };

                const response = await api('api/v1/mail/getAll', 'POST', watchRequest);
                setMails(response.data.data);
            } catch (error) {
                alert('Error fetching user and mails:', error);
            }
        };

        fetchUser();
    }, []);


    const handleCheckboxChange = (event, mail) => {
        if (event.target.checked) {
            setSelectedMails(prevSelected => [...prevSelected, mail]);
        } else {
            setSelectedMails(prevSelected => prevSelected.filter(selectedMail => selectedMail.id !== mail.id));
        }
    }

    const handleDeleteSelectedMails = async () => {
        try {
            const response = await api('api/v1/mail/deleteMails', 'POST', { mailIds: selectedMails.map(mail => mail.id) });
            console.log(response.data)
            if (response.data.errorMsg === '') {
                alert('메일 삭제 성공!');
            } else {
                alert('메일 삭제 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error deleting mails:', error);
        }
    };

    console.log(mails);

    return (
        <div className={"_right-content"}>
            {user && user.role === 'ADMIN' && (
                <div className="admin-mail">
                    <button onClick={handleDeleteSelectedMails}>삭제</button>
                    <table>
                        <thead>
                        <tr>
                            <th>보낸 사람</th>
                            <th>보낸 날짜</th>
                            <th>제목</th>
                            <th>내용</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mails.map(mail => (
                            <tr key={mail.id}>
                                <td>{mail.sender}</td>
                                <td>{mail.sendTime}</td>
                                <td>{mail.title}</td>
                                <td>{mail.message}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={(event) => handleCheckboxChange(event, mail)}
                                        checked={selectedMails.some(selectedMail => selectedMail.id === mail.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {user && user.role === 'PROFESSOR' && (
                <div className="professor-mail">
                    <button onClick={handleDeleteSelectedMails}>삭제</button>
                    <table>
                        <thead>
                        <tr>
                            <th>보낸 사람</th>
                            <th>보낸 날짜</th>
                            <th>제목</th>
                            <th>내용</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mails.map(mail => (
                            <tr key={mail.id}>
                                <td>{mail.senderEmail}</td>
                                <td>{mail.sendTime}</td>
                                <td>{mail.title}</td>]
                                <td>{mail.message}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={(event) => handleCheckboxChange(event, mail)}
                                        checked={selectedMails.some(selectedMail => selectedMail.id === mail.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {user && user.role === 'STUDENT' && (
                <div className="student-mail">
                    <button onClick={handleDeleteSelectedMails}>삭제</button>
                    <table>
                        <thead>
                        <tr>
                            <th>보낸 사람</th>
                            <th>보낸 날짜</th>
                            <th>제목</th>
                            <th>내용</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mails.map(mail => (
                            <tr key={mail.id}>
                                <td>{mail.senderEmail}</td>
                                <td>{mail.sendTime}</td>
                                <td>{mail.title}</td>]
                                <td>{mail.message}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={(event) => handleCheckboxChange(event, mail)}
                                        checked={selectedMails.some(selectedMail => selectedMail.id === mail.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {!user && (
                <div>유저 정보를 불러오는 중입니다...</div>
            )}
        </div>
    );
};

export default WatchMail;
