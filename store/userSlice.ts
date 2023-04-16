import axios from "axios";
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { User } from "../typeing";
import { userMe,Logout ,Loginuser} from "../Reduxhelper/usercall";

interface userSlice {
  active: boolean;
  user: User | null;
  isauthenticateuser: boolean;
  manu:boolean
}

const initialState: userSlice = {
  active: true,
  user: null,
  isauthenticateuser: false,
  manu:false,
};

// Defin e the slice for pools data and token prices
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setManu: (state, action) => {
      state.manu = !action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userMe.fulfilled, (state, action) => {
      if (action.payload) {
        state.isauthenticateuser = true;
        state.user = action.payload;
      }
    }),
      builder.addCase(userMe.rejected, (state, action) => {
        state.isauthenticateuser = false;
      }),

      builder.addCase(Logout.fulfilled, (state,action) => {
        state.isauthenticateuser = false;
      }),
      builder.addCase(Loginuser.fulfilled, (state,action) => {
        if(action.payload){
          state.isauthenticateuser = true;
        }else{
          state.isauthenticateuser = false;
        }
        
      })
  },
});

export const { setManu } = userSlice.actions;
export default userSlice.reducer;
