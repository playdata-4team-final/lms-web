import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Root from "./components/pages/Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
