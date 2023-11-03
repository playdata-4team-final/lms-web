import {useLocation} from "react-router-dom";
//import sidebar 명칭 겹침;;
//`main_sidebar`, "admin_sidebar"

import React, {useState} from 'react';

const GlobalSidebar = () => {

    return (
        <div>
                <div className={`main_sidebar`}>
                        <div className="admin_sidebar">
                            {(user && user.role === 'ADMIN') && <div className={`first_menu`} >
                                <AdminMenu/>
                           </div>}
                        </div>
                        <div className="student_sidebar">
                        {(user && user.role === 'ADMIN') && <div className={`first_menu`} >
                            <StudentMenu/>
                        </div>}
                         </div>
                        <div className="professor_sidebar">
                        {(user && user.role === 'ADMIN') && <div className={`first_menu`} >
                            <ProfessorMenu/>
                        </div>}
                    </div>
                </div>
        </div>
    );
};

export default GlobalSidebar;