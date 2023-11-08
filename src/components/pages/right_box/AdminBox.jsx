import "../Layout/menubar/MainLayout.css"
import {Outlet} from "react-router";

const AdminBox = ({children}) => {

    return (<div>
            <Outlet>{children}</Outlet>
        </div>
    )

}

export default AdminBox