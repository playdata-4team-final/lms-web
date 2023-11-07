import React, { useEffect, useState } from 'react';

const WriteMail = () => {
    const [user, setUser] = useState(null);
    const token = { id: 1, name: "오성", role: "ADMIN" }

    useEffect(() => {
        setUser(token);
    }, []);

    return (
        <div>
            <>
                    {token.role === 'ADMIN' && (
                        <div className="admin-mail">
                            <div>Admin 내용</div>
                        </div>
                    )}

                    {token.role === 'PROFESSOR' && (
                        <div className="professor-mail">
                            <div>Professor 내용</div>
                        </div>
                    )}

                {token.role === 'STUDENT' && (
                    <div className="student-mail">
                        <div>Student 내용</div>
                    </div>
                )}

            </>
            )

            {!token && (
                <div>유저 정보를 불러오는 중입니다...</div>
            )}

        </div>
    );
};

export default WriteMail;
