import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import Siteinfo from "./Siteinfo"
const store = configureStore({
    reducer: {
        userSlice: userSlice,
        siteinfo:Siteinfo

    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch