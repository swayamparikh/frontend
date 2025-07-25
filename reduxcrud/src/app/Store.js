import { configureStore } from "@reduxjs/toolkit";
import  userslice from "../Slicedata/userslice";
import  adminnSlice  from "../Slicedata/adminn";

export const Store = configureStore({
    reducer:{
        users : userslice,
        admin : adminnSlice
    }
})