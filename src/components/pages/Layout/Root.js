import React from "react";
import Menu from "./menubar/Menubar";
import { PC } from "../../config/Responsive";

const Root = () => {
  return (
    <div id="wrap">
      <main style={{ height: "100vh" }}>
        <PC>
          <Menu />
        </PC>
      </main>
    </div>
  );
};

export default Root;
