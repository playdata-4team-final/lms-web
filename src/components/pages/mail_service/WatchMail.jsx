import React, {useEffect, useState} from 'react';


const WatchMail = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulating asynchronous fetch of user data
        const fetchUser = () => {
            const token = { id: 1, name: "오성", role: "PROFESSOR" };
            setUser(token);
        }

        fetchUser();
    }, []);

    return (
        <div className={"_right-content"}>

            {user && user.role === 'ADMIN' && (
                <div className="admin-mail">
                    <div>Admin 내용</div>
                </div>
            )}

            {user && user.role === 'PROFESSOR' && (
                <div className="professor-mail">
                    <div>Professor 내용</div>
                </div>
            )}

            {user && user.role === 'STUDENT' && (
                <div className="student-mail">
                    <div>Student 내용</div>
                </div>
            )}

            {!user && (
                <div>유저 정보를 불러오는 중입니다...</div>
            )}
        </div>
    );
};

export default WatchMail;

