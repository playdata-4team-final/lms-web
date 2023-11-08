import { Outlet } from "react-router"
import ProfessorMenu from "../Layout/menubar/side_menu/ProfessorMenu";


const ProfessorBox = ({children}) => {

    return (<div>
            <Outlet>{children}</Outlet>
        </div>
    )

}

export default ProfessorBox;