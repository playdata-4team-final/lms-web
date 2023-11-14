import { configureStore } from "@reduxjs/toolkit";
import { loginCheckSlice } from "../future/loginCheck";
import { userSlice } from "../future/userSlice";
import { scrollSlice } from "../future/scrollSlice";

export default configureStore({
  reducer: {
    scrolls: scrollSlice,
    loginCheck: loginCheckSlice,
    user: userSlice,
  },
});
