import axios from "axios";
import { createSlice, createAsyncThunk ,PayloadAction,current} from "@reduxjs/toolkit";
// import {} from "../typeing";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

interface PoolsState {
active:boolean
  }


const initialState: PoolsState = {
active:true
  };

  // Defin e the slice for pools data and token prices
 const poolsSlice = createSlice({
    name: "pools",
    initialState,
    reducers: {
      setFilterStatus:(state, action:PayloadAction<boolean>) =>{

      }
    },
    extraReducers: (builder) => {
   

    }
  });


  export const {} = poolsSlice.actions;
  export default poolsSlice.reducer;




