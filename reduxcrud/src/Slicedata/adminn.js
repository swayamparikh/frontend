import { createSlice } from "@reduxjs/toolkit";


export const adminnSlice = createSlice({
    name:"adminDetails",
    initialState:{
        admin : [],
        loading : false,
        error : ""
    },
    reducers:{

    }
})

export const {} = adminSlice.actions;

export default adminSlice.reducer;