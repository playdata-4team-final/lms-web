import GlobalHeader from "../../pages/Layout/menubar/GlobalHeader";
import GlobalFooter from "../../pages/Layout/menubar/GlobalFooter";
import GlobalContentBox from "../../pages/Layout/menubar/GlobalContentBox";
import AdminMenu from "../../pages/Layout/menubar/side_menu/AdminMenu";
import "../../pages/Layout/menubar/MainLayout.css";
import ProfessorMenu from "../../pages/Layout/menubar/side_menu/ProfessorMenu";
import StudentMenu from "../../pages/Layout/menubar/side_menu/StudentMenu";
import {setUserStatus} from "../future/userSlice";

const MainLayout = () => {

    const user = { id: 1, name: "오성", role: "STUDENT" }

    return <>
        <GlobalHeader />
        <div className={'main-box'}>
            <div className="_left-box">
                {(user && user.role === 'ADMIN') && <div className="_button-list">
                    <AdminMenu />
                </div>}
                {(user && user.role === 'PROFESSOR') && <div className="_button-list">
                    <ProfessorMenu />
                </div>}
                {(user && user.role === 'STUDENT') && <div className="_button-list">
                    <StudentMenu />
                </div>}

            </div>
            <div className="_right-box">
                <GlobalContentBox/>
            </div>
            <GlobalFooter />
        </div>

    </>
}

export default MainLayout