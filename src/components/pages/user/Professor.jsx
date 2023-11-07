import { Outlet } from "react-router"
import ProfessorMenu from "../Layout/menubar/side_menu/ProfessorMenu";


const Professor = ({children}) => {

    return (<div className={"_right-content"}>
            {children}
        </div>
    )

}

export default Professor;