import { Outlet } from "react-router";

const ProfessorBox = ({ children }) => {
  return (
    <div>
      <Outlet>{children}</Outlet>
    </div>
  );
};

export default ProfessorBox;
