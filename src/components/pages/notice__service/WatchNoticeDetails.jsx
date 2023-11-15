
import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import {api} from "../../api/api";


const WatchNoticeDetails = () => {
    const { id } = useParams();
    const [noticeDetails, setNoticeDetails] = useState('');
    const user = {userId: "7d6f858a-d8bd-4074-8c6e-d9c47e21b1a6", userEmail:"john.doe@example.com"};
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        comments: '',
        adminBoardId: ''

    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCommentSubmit = async () => {
        try {
            const NoticeCommentRequest = {
                userId: user.userId,
                Email: user.userEmail,
                comment: formData.comments,
                adminBoardId: id
            };
            await api('/api/v1/board/writeNoticeComments', 'POST', NoticeCommentRequest);
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleDeleteComment = async (comentId) => {
        try {
            const NoticeCommentDeleteRequest = {
                id: comentId,
                userId: user.userId
            };

            // id로 유저 정보 찾아오기
            const response = await api(`api/v1/board/deleteNoticeComments`, 'POST', NoticeCommentDeleteRequest);


            if (response.data.errorMsg === '') {
                setComments(prevComments => prevComments.filter(comment => comment.id !== comentId));
                alert('댓글 삭제 성공!');
            } else {
                alert('댓글 삭제 실패:', response.statusText);
            }
        } catch (error) {
            alert('Error deleting comment:', error);
        }
    };



    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = "john.doe@example.com";
    //             setMyEmail(data);
    //         } catch (error) {
    //             console.error('Error fetching email:', error);
    //         }
    //     };
    //     fetchData();
    // }, []); 나중에 항상 토큰 정보 가져오게 끔 할거임


    useEffect(() => {
        const fetchNoticeDetails = async () => {
            try {
                const noticeResponse = await api(`api/v1/board/getNotice/${id}`, 'GET');
                setNoticeDetails(noticeResponse.data.data);
                const commentResponse = await api(`api/v1/board/getNoticeComments/${id}`, `GET`)
                setComments(commentResponse.data.data);
            } catch (error) {
                alert('Error fetching notice details:', error);
            }
        };

        fetchNoticeDetails();
    }, [id]);





    if (!noticeDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>제목: {noticeDetails.title}</div>
            <div>내용: {noticeDetails.content}</div>
            <div>
                첨부 파일: <Link to>{noticeDetails.fileUrl}</Link>
            </div>
            <input
                onChange={handleChange}
                id="comments"
                name="comments"
                value={formData.comment}
            />
            <button onClick={handleCommentSubmit}>입력</button>
            <h2>댓글</h2>
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <div className="user-email">{comment.userEmail}</div>
                    <div className="comment-text">{comment.comments}</div>
                    <div className="create-date">{comment.createAt}</div>
                    <div className="create-date">{comment.updateAt}</div>
                    <button>↳</button>

                    <button onClick={() => handleDeleteComment(comment.id)}>삭제</button>
                </div>
            ))}
        </>
    );
};

export default WatchNoticeDetails;

