import { createSlice } from "@reduxjs/toolkit";

const initialState = { scroll: false };

export const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        setScroll: (state, actions) => {
            state.scroll = actions.payload
        },

    },
});

export const { setScroll } = scrollSlice.actions;

export default scrollSlice.reducer;

