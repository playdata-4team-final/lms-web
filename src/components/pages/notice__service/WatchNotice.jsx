import React, {useEffect, useState} from "react";
import {api} from "../../api/api";
import { useNavigate } from 'react-router-dom';



const WatchNotice = () => {

    const [user, setUser] = useState();
    const [notices, setNotices] = useState([]);
    const [selectedNotices, setSelectedNotices] = useState([]);


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = { role: 'ADMIN', email: "john.doe@example.com" };
                setUser(token);

                const response = await api('api/v1/board/getAllNotices', 'GET');
                console.log(response.data.data);
                setNotices(response.data.data);
            } catch (error) {
                alert('Error fetching user and notices:', error);
            }
        };

        fetchUser();
    }, []);


    const handleWatchNoticeDetails = async (id) => {
        console.log(id)
        try {
            const response = await api(`api/v1/board/getNotice/${id}`, 'GET');
            console.log(response.data)
            if (response.data.errorMsg === '') {
                alert('공지사항 호출 성공!');
            } else {
                alert('공지사항 호출 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error Watching Notice:', error);
        }
    }

    const handleCheckboxChange = (event, notice) => {
        if (event.target.checked) {
            setSelectedNotices(prevSelected => [...prevSelected, notice]);
            console.log(selectedNotices)
        } else {
            setSelectedNotices(prevSelected => prevSelected.filter(selectedNotice => selectedNotice.id !== notice.id));
            console.log(selectedNotices)
        }
    }



    const handleDeleteSelectedNotices = async () => {
        try {
            const response = await api('api/v1/board/deleteNotice', 'POST', { noticeIds: selectedNotices.map(notice => notice.id) });
            console.log(response.data)
            if (response.data.errorMsg === '') {
                alert('공지 삭제 성공!');
            } else {
                alert('공지 삭제 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error deleting notices:', error);
        }
    };

    const navigate = useNavigate();

    const handleTitleClick = async (id) => { //제목 클릭했을때, id 가져와야 하는데, 자꾸 null 가져와서 찾아오질 못함. 라우터도 설정하긴 했음.
        try {
            if (user && user.role === 'ADMIN') {
                navigate(`/admin/notice/watchNotice/details/${id}`);
            } else if (user && user.role === 'PROFESSOR') {
                navigate(`/professor/notice/watchNotice/details/${id}`);
            } else if (user && user.role === 'STUDENT') {
                navigate(`/student/notice/watchNotice/details/${id}`);
            }
            await handleWatchNoticeDetails(id);
        } catch (error) {
            console.error('Error handling title click:', error);
        }
    };


    return (<>
            <div className={"_right-content"}>
                {user && user.role === 'ADMIN' && (
                    <div className="admin-board">
                        <button onClick={handleDeleteSelectedNotices}>삭제</button>
                        <table>
                            <thead>
                            <tr>
                                <th>작성날짜</th>
                                <th>수정날짜</th>
                                <th>관리자 Email</th>
                                <th>제목</th>
                                <th>내용</th>
                                <th>선택</th>
                            </tr>
                            </thead>
                            <tbody>
                            {notices.map(notice => (
                                <tr key={notice.noticeId}>
                                    <td>{notice.createAt}</td>
                                    <td>{notice.updateAt}</td>
                                    <td>{notice.email}</td>
                                    <td>
                                        <button onClick={() => handleTitleClick(notice.noticeId)}>
                                            {notice.title}
                                        </button>
                                    </td>
                                    <td>{notice.content}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            onChange={(event) => handleCheckboxChange(event, notice)}
                                            checked={selectedNotices.some(selectedNotice => selectedNotice.id === notice.id)}
                                        />
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {user && (user.role === 'PROFESSOR' || user.role === 'STUDENT') && (
                    <div className="user-board">
                        <table>
                            <thead>
                            <tr>
                                <th>작성날짜</th>
                                <th>수정날짜</th>
                                <th>관리자 Email</th>
                                <th>제목</th>
                                <th>내용</th>
                            </tr>
                            </thead>
                            <tbody>
                            {notices.map(notice => (
                                <tr key={notice.id}>
                                    <td>{notice.createAt}</td>
                                    <td>{notice.updateAt}</td>
                                    <td>{notice.email}</td>
                                    <td>
                                        <div onClick={() => handleTitleClick(notice.id)}>
                                            {notice.title}
                                        </div>
                                    </td>
                                    <td>{notice.content}</td>
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
        </>
    )
}

export default WatchNotice;
