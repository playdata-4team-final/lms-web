import "../Layout/menubar/MainLayout.css"
import {Outlet} from "react-router";

const StudentBox = ({children}) => {

    return (
            <Outlet>{children}</Outlet>
    )

}

export default StudentBox;