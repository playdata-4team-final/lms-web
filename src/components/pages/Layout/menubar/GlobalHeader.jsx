// improt css
// "main_header": div 전체 틀, 색깔, 글씨체
// "first_menu": className:"user-image"
// className="user-name",  className="logout,  className="mailBox"


import {useState} from "react";

const GlobalHeader = () => {

    const [mailModal, setMailModal] = useState(false);

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
                        <Link to="/login" className="logout">로그아웃</Link>
                    </div>
                    <div onClick={()=>setMailModal(true)} />
                        <div className="mailBox" img="mailUrl">쪽지함</div>
                        {mailModal && <MailPage/>}
                    </div>
                </div>
    </div>

}

export default GlobalHeader