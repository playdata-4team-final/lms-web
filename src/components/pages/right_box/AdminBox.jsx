import { Outlet } from "react-router";

const AdminBox = ({ children }) => {
  return (
    <div>
      <Outlet>{children}</Outlet>
    </div>
  );
};

export default AdminBox;
