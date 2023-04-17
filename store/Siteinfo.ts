import axios from "axios";
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
import { User } from "../typeing";
import { userMe,Logout ,Loginuser} from "../Reduxhelper/usercall";
import {getSkill} from "../Reduxhelper/siteinfo";
import { useAppdispatch ,useAppSelector} from "../hooks/redux";

interface Siteinfo {
    skill:[]
}

const initialState: Siteinfo = {
    skill:[]
};

// Defin e the slice for pools data and token prices
const Siteinfo = createSlice({
  name: "Siteinfo",
  initialState,
  reducers: {
    setManu: (state, action) => {

    },
  },
  extraReducers: (builder) => {
      builder.addCase(getSkill.fulfilled, (state,action) => {
    state.skill =action.payload;
   
      })
  },
});



export const { setManu } = Siteinfo.actions;
export default Siteinfo.reducer;

