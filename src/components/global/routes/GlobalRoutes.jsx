import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import WriteMail from "../../pages/mail_service/WriteMail";
import WatchMail from "../../pages/mail_service/WatchMail";
import Login from "../../pages/login/Login";
import AdminBox from "../../pages/right_box/AdminBox";
import AcceptMajor from "../../pages/accept_service/AcceptMajor";
import AcceptLecture from "../../pages/accept_service/AcceptLecture";
import WriteNotice from "../../pages/notice_service/WriteNotice";
import WatchNotice from "../../pages/notice_service/WatchNotice";
import StudentBox from "../../pages/right_box/StudentBox";
import ProfessorBox from "../../pages/right_box/ProfessorBox";
import ApplyLecture from "../../pages/lecture_service/ApplyLecture";
import MyLecture from "../../pages/lecture_service/MyLecture";
import SendLecture from "../../pages/lecture_service/SendLecture";
import MainLayout from "../template/MainLayout";
import Cursor from "../../atoms/Cursor";
import MyPage from "../../pages/my/MyPage";
import { RecoilRoot } from "recoil";

// GlobalRoutes.jsx
// ...
const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <Cursor />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/main" element={<Home />} />
            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminBox />}>
              <Route path="accept/*">
                <Route path="acceptMajor" element={<AcceptMajor />} />
                <Route path="acceptLecture" element={<AcceptLecture />} />
              </Route>
              <Route path="mail/*">
                <Route path="writeMail" element={<WriteMail />} />
                <Route path="watchMail" element={<WatchMail />} />
              </Route>
              <Route path="notice/*">
                <Route path="writeNotice" element={<WriteNotice />} />
                <Route path="watchNotice" element={<WatchNotice />} />
              </Route>
            </Route>

            {/* Student Routes */}
            <Route path="/student/*" element={<StudentBox />}>
              <Route path="lecture/*">
                <Route path="sendLecture" element={<SendLecture />} />
                <Route path="myLecture" element={<MyLecture />} />
              </Route>
              <Route path="mail/*">
                <Route path="writeMail" element={<WriteMail />} />
                <Route path="watchMail" element={<WatchMail />} />
              </Route>
              <Route path="notice/*">
                <Route path="watchNotice" element={<WatchNotice />} />
              </Route>
            </Route>

            {/* Professor Routes */}
            <Route path="/professor/*" element={<ProfessorBox />}>
              <Route path="lecture/*">
                <Route path="applyLecture" element={<ApplyLecture />} />
                <Route path="myLecture" element={<MyLecture />} />
              </Route>
              <Route path="mail/*">
                <Route path="writeMail" element={<WriteMail />} />
                <Route path="watchMail" element={<WatchMail />} />
              </Route>
              <Route path="notice/*">
                <Route path="writeNotice" element={<WriteNotice />} />
                <Route path="watchNotice" element={<WatchNotice />} />
              </Route>
            </Route>

            {/* MyPage Route */}
            <Route path="/my" element={<MyPage />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default GlobalRoutes;
