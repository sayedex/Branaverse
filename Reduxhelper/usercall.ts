import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import newRequest from "../utils/Axiosapi";
import { Login, User } from "../typeing";
import { ToastContainer, toast } from "react-toastify";
export const userMe = createAsyncThunk("userslice/me", async (thunkAPI) => {
  try {
    const response = await newRequest.get("/auth/me");
    return response.data.user; // get user info
  } catch (err) {
   return false;
  }
});

export const Logout = createAsyncThunk("userslice/logout", async (thunkAPI) => {
  try {
    const response = await newRequest.get("/auth/logout");
    return response; // 
  } catch (err) {
   return false;
  }
});


export const Loginuser = createAsyncThunk("userslice/login", async (params: { data:Login},thunkAPI) => {
  try {
    const response = await newRequest.post("/auth/login", params.data);
    toast.success(`wow! welcome back`, {
      position: "bottom-right",
    });
    return true
   // router.push("/me");
    //open OTP input..
  } catch (err: any) {
    console.log(err);
    toast.error(`${err?.response.data}`, {
      position: "bottom-right",
    });
    return false
  }
});

