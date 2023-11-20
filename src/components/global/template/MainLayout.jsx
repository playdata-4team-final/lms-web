import GlobalHeader from "../../pages/Layout/menubar/GlobalHeader";
import GlobalFooter from "../../pages/Layout/menubar/GlobalFooter";
import GlobalContentBox from "../../pages/Layout/menubar/GlobalContentBox";
import "../../pages/Layout/menubar/MainLayout.css";

import Cursor from "../../atoms/Cursor";

const MainLayout = () => {
  return (
    <>
      <Cursor />
      <GlobalHeader />
      <div className={"main-box"}>
        <div className="_right-box">
          <GlobalContentBox />
        </div>
        <GlobalFooter />
      </div>
    </>
  );
};

export default MainLayout;
