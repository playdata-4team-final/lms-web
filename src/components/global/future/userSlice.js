import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  username: "",
  role: "",
  status: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserdux: (state, data) => {
      const { id, email, role, status, username } = data.payload;

      state.email = email;
      state.id = id;
      state.role = role;
      state.status = status;
      state.username = username;
    },
    setUserStatus: (state, data) => {
      state.status = data.payload;
    },
  },
});

export const { setUserdux, setUserStatus } = userSlice.actions;

export default userSlice.reducer;
