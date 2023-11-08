import "../Layout/menubar/MainLayout.css"
import {Outlet} from "react-router";

const StudentBox = ({children}) => {

    return (<div>
            <Outlet>{children}</Outlet>
        </div>
    )

}

export default StudentBox;