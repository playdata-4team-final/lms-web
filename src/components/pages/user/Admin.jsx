import "../Layout/menubar/GlobalSidebar.css"
import {Outlet} from "react-router";

const Admin = ({children}) => {

    return<>
            <Outlet/>
            {children}
        </>

}

export default Admin