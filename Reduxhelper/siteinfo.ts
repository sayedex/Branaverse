
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import newRequest from "../utils/Axiosapi";
import { Login, User } from "../typeing";
import { ToastContainer, toast } from "react-toastify";

export const getSkill = createAsyncThunk("userslice/getSkill", async (thunkAPI) => {
    try {
      const response = await newRequest.get("/admin/getSkill");
      return response.data.skill;
    } catch (err) {
    console.log(err
      );
    
    }
  });
  
  