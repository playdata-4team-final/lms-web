import {createSlice} from "@reduxjs/toolkit";

const initialIsLoginState = {
    loginInfo : {
        isLogin : false,
        name : '',
        token: '',
        userId:''
    }
}

export const loginCheckSlice = createSlice({
    name : 'isLogin',
    initialState : initialIsLoginState,
    reducers : {

        loginInfoSet(state, action) {
            state.loginInfo = action.payload;
        },

    }
})

export const {loginInfoSet} = loginCheckSlice.actions;
export default loginCheckSlice.reducer;
