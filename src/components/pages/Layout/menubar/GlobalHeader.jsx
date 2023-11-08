// improt css
// "main_header": div 전체 틀, 색깔, 글씨체
// "first_menu": className:"user-image"
// className="user-name",  className="logout,  className="mailBox"


import {useState} from "react";
import {Link} from "react-router-dom";
import "../../Layout/menubar/GlobalHedaer.css"

const GlobalHeader = () => {

    const user = { id: 1, name: "오성", role: "ADMIN" }

    return<div>
    <div className={`main_header`}>

            <div className="section">
                <Link to='/main' className={`logo`} >LMS</Link>
            </div>
                <div className={"first_menu"} >
                    <div>
                        <Link to="/myPage" className="user-image" img ="myPageUrl"></Link>
                    </div>
                    <div>
                        <div className="user-name" value = "`${user.name}`"/>
                    </div>
                    <div>
                        <Link to="/" className="logout">로그아웃</Link>
                    </div>
                    <div />
                    {(user && user.role === 'ADMIN') && <Link to = "admin/mail/watchMail">✉️내 쪽지</Link>}
                    {(user && user.role === 'STUDENT') && <Link to = "student/mail/watchMail">✉️내 쪽지</Link>}
                    {(user && user.role === 'PROFESSOR') && <Link to = "professor/mail/watchMail">✉️내 쪽지</Link>}
                    </div>
                </div>
    </div>

}

export default GlobalHeader