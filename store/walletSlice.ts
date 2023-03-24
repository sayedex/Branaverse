import axios from "axios";
import { createSlice, createAsyncThunk ,PayloadAction} from "@reduxjs/toolkit";
import {pools} from "../typeing";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import {getPoolApr} from "../utils/apr"
interface PoolsState {
isRender:boolean
  }


const initialState: PoolsState = {
    isRender:false,
  };

  // Define the slice for pools data and token prices
 const walletSlice = createSlice({
    name: "pools",
    initialState,
    reducers: {
      setRender: (state) => {
     state.isRender = true;
      },
    
    
    }
  });


  export const { setRender, } = walletSlice.actions;
  export default walletSlice.reducer;




