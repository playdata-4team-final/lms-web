import GlobalHeader from "../../pages/Layout/menubar/GlobalHeader";
import GlobalFooter from "../../pages/Layout/menubar/GlobalFooter";
import GlobalContentBox from "../../pages/Layout/menubar/GlobalContentBox";
import AdminMenu from "../../pages/Layout/menubar/side_menu/AdminMenu";
import "../../pages/Layout/menubar/MainLayout.css";
import ProfessorMenu from "../../pages/Layout/menubar/side_menu/ProfessorMenu";
import StudentMenu from "../../pages/Layout/menubar/side_menu/StudentMenu";
import {setUserStatus} from "../future/userSlice";
import {useRecoilValue} from "recoil";
import {roleSelector} from "../atom/LoginAtom";

const MainLayout = () => {

    const role = useRecoilValue(roleSelector);

    return <>
        <GlobalHeader />
        <div className={'main-box'}>
            <div className="_left-box">
                {(role === 'ADMIN') && <div className="_button-list">
                    <AdminMenu />
                </div>}
                {(role === 'PROFESSOR') && <div className="_button-list">
                    <ProfessorMenu />
                </div>}
                {(role === 'STUDENT') && <div className="_button-list">
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