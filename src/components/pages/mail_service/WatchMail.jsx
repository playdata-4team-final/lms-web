
import React, { useEffect, useState } from 'react';
import {api} from "../../global/api/Api";
import styled from "styled-components";
import {useRecoilValue} from "recoil";
import {idAtom, roleAtom} from "../../global/atom/LoginAtom";


const WatchMail = () => {
    const [mails, setMails] = useState([]);
    const [selectedMails, setSelectedMails] = useState([]);
    const role = useRecoilValue(roleAtom);
    const id = useRecoilValue(idAtom);



    const StyledButton = styled.button`
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const majorName = await api(`api/v1/mail/majorName`,`GET`)

                const watchRequest = {
                    receiverId: id,
                    majorName: majorName
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
            {role === 'ADMIN' && (
                <div style={{ background: 'white', color: 'black' }}>
                    <h2>쪽지</h2>
                    <StyledButton onClick={handleDeleteSelectedMails}>삭제</StyledButton>
                    <div>
                        <div>
                        <div>
                            <div>보낸 사람</div>
                            <div>보낸 날짜</div>
                            <div>제목</div>
                            <div>내용</div>
                        </div>
                        </div>
                        <div>
                        {mails.map(mail => (
                            <div key={mail.id}>
                                <div>{mail.sender}</div>
                                <div>{mail.sendTime}</div>
                                <div>{mail.title}</div>
                                <div>{mail.message}</div>
                                <div>
                                    <input
                                        type="checkbox"
                                        onChange={(event) => handleCheckboxChange(event, mail)}
                                        checked={selectedMails.some(selectedMail => selectedMail.id === mail.id)}
                                    />
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            )}

            {role === 'PROFESSOR' && (
                <div style={{ background: 'white', color: 'black' }}>
                    <h2>쪽지</h2>
                    <div>
                        <div>
                        <div>
                            <th>보낸 사람</th>
                            <th>보낸 날짜</th>
                            <th>제목</th>
                            <th>내용</th>
                        </div>
                        </div>
                        <div>
                        {mails.map(mail => (
                            <div key={mail.id}>
                                <div>{mail.senderEmail}</div>
                                <div>{mail.sendTime}</div>
                                <div>{mail.title}</div>]
                                <div>{mail.message}</div>
                                <div>
                                    <input
                                        type="checkbox"
                                        onChange={(event) => handleCheckboxChange(event, mail)}
                                        checked={selectedMails.some(selectedMail => selectedMail.id === mail.id)}
                                    />
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    { mails.length > 0 && <div style ={{}} onClick={handleDeleteSelectedMails} style={{marginTop: `10px`}}>삭제</div> }
                </div>
            )}

            {role === 'STUDENT' && (
                <div style={{ background: 'white', color: 'black' }}>
                    <button onClick={handleDeleteSelectedMails}>삭제</button>
                    <div>
                        <div>
                        <div>
                            <div>보낸 사람</div>
                            <div>보낸 날짜</div>
                            <div>제목</div>
                            <div>내용</div>
                        </div>
                        </div>
                        <div>
                        {mails.map(mail => (
                            <div key={mail.id}>
                                <div>{mail.senderEmail}</div>
                                <div>{mail.sendTime}</div>
                                <div>{mail.title}</div>]
                                <div>{mail.message}</div>
                                <div>
                                    <input
                                        type="checkbox"
                                        onChange={(event) => handleCheckboxChange(event, mail)}
                                        checked={selectedMails.some(selectedMail => selectedMail.id === mail.id)}
                                    />
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            )}

            {!role && (
                <div>유저 정보를 불러오는 중입니다...</div>
            )}
        </div>
    );
};

export default WatchMail;
