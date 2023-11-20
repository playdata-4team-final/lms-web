import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {api} from "../../global/api/Api";
import {useRecoilValue} from "recoil";
import {roleAtom} from "../../global/atom/LoginAtom";




const WatchNotice = () => {
    const role = useRecoilValue(roleAtom);
    const [notices, setNotices] = useState([]);
    const [selectedNotices, setSelectedNotices] = useState([]);



    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await api('api/v1/board/getAllNotices', 'GET');
                console.log(response.data)
                setNotices(response.data);
                console.log(notices)
            } catch (error) {
                alert('Error fetching notices:', error);
            }
        };

        fetchNotice();
    }, []);


    const handleWatchNoticeDetails = async (id) => {

        try {
            const response = await api(`api/v1/board/getNotice/${id}`, 'GET');
            if (response.errorMsg === '') {
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
            setSelectedNotices(prevSelected => prevSelected.filter(selectedNotice => selectedNotice.adminBoardId !== notice.adminBoardId));
            console.log(selectedNotices)
        }
    }



    const handleDeleteSelectedNotices = async () => {
        try {
            const response = await api('api/v1/board/deleteNotice', 'POST', {adminBoardIds: selectedNotices.map(notice => notice.adminBoardId) });
            if (response.errorMsg === '') {
                alert('공지 삭제 성공!');
            } else {
                alert('공지 삭제 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error deleting notices:', error);
        }
    };

    const navigate = useNavigate();

    const handleTitleClick = async (id) => {
        try {
            if (role === 'ADMIN') {
                navigate(`/admin/notice/watchNotice/details/${id}`);
            } else if (role === 'PROFESSOR') {
                navigate(`/professor/notice/watchNotice/details/${id}`);
            } else if (role === 'STUDENT') {
                navigate(`/student/notice/watchNotice/details/${id}`);
            }
            await handleWatchNoticeDetails(id);
        } catch (error) {
            console.error('Error handling title click:', error);
        }
    };


    return (<>
            <div className={"_right-content"}>
                {role === 'ADMIN' && (
                    <div className="admin-board">
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
                                <tr key={notice.adminBoardId}>
                                    <td>{notice.createAt}</td>
                                    <td>{notice.updateAt}</td>
                                    <td>{notice.email}</td>
                                    <td>
                                        <button onClick={() => handleTitleClick(notice.id)}>
                                            {notice.title}
                                        </button>
                                    </td>
                                    <td>{notice.content}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            onChange={(event) => handleCheckboxChange(event, notice)}
                                            checked={selectedNotices.some(selectedNotice => selectedNotice.adminBoardId === notice.adminBoardId)}
                                        />
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={handleDeleteSelectedNotices}>삭제</button>
                    </div>
                )}

                {(role === 'PROFESSOR' || role === 'STUDENT') && (
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
                                        <div onClick={() => handleTitleClick(notice.noticeId)}>
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
                {!role && (
                    <div>유저 정보를 불러오는 중입니다...</div>
                )}
            </div>
        </>
    )
}

export default WatchNotice;
