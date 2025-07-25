import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const showuser = createAsyncThunk(
    'showuser', async (argu, { rejectWithValue }) => {
        try {

            const res = await axios.get("http://localhost:3000/user")
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// new data
export const creatuser = createAsyncThunk(
    'creatuser', async (data, { rejectWithValue }) => {
        try {

            const res = await axios.post("http://localhost:3000/user", data)
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteuser = createAsyncThunk(
    'deleteuser', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/user/${id}`)
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateuser = createAsyncThunk(
    'updateuser', async (data, { rejectWithValue }) => {
        try {

            const res = await axios.put(`http://localhost:3000/user/${data.id}`, data)
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)




export const userSlice = createSlice({
    name: "userDetails",
    initialState: {
        user: [],
        loading: false,
        error: ""
    },
    reducers: {
        userPending: (state) => {
            state.loading = true;
        },
        userFullfiled: (state, action) => {
            state.loading = false,
                state.user.push(action.payload)
        },
        userReject: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // read data
            .addCase(showuser.pending, (state) => {
                state.loading = true
            })
            .addCase(showuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(showuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            // new data
            .addCase(creatuser.pending, (state) => {
                state.loading = true
            })
            .addCase(creatuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.push(action.payload)
            })
            .addCase(creatuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            // delete

            .addCase(deleteuser.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = state.user.filter((data, index) => index !== action.payload)
            })
            .addCase(deleteuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            // update

            .addCase(updateuser.pending, (state) => {
                state.loading = true
            })
            .addCase(updateuser.fulfilled, (state, action) => {
                state.loading = false;
                // state.user = state.user.filter((data,index)=> data.id === action.payload)

                state.user = state.user.map((ele)=>
                // edit query
                ele.id = action.payload.id ? action.payload : ele

            )
            })
            .addCase(updateuser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const { userPending, userFullfiled, userReject } = userSlice.actions;

export default userSlice.reducer;