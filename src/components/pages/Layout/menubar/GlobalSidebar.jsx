import React from 'react';
import Admin from "../../user/Admin";
import Student from "../../user/Student";
import Professor from "../../user/Professor";

const GlobalSidebar = () => {

    const user = { id: 1, name: "오성", role: "ADMIN" };

    return (
        <>
            <div className="main_sidebar">
                {user && user.role === 'ADMIN' && (
                    <div className="admin_sidebar">
                        <Admin />
                    </div>
                )}
                {user && user.role === 'STUDENT' && (
                    <div className="student_sidebar">
                        <Student />
                    </div>
                )}
                {user && user.role === 'PROFESSOR' && (
                    <div className="professor_sidebar">
                        <Professor />
                    </div>
                )}
            </div>
        </>
    );
};

export default GlobalSidebar;
