import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"; // jwt-decode 라이브러리를 사용합니다.

const WriteNotice = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = { role: "ADMIN" }
        setUser(token);
    }, []);

    return (
        <div>
            {user && user.role !== 'STUDENT' && (
                <>
                    {user.role === 'ADMIN' && (
                        <div className="admin-mail">
                            <Link to ="/admin/writeNotice">공지 작성</Link>
                            <Link to ="/admin/watchNotice">공지 보기</Link>
                        </div>
                    )}

                    {user.role === 'PROFESSOR' && (
                        <div className="professor-mail">
                            <Link to ="/professor/watchNotice">공지 보기</Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default WriteNotice;