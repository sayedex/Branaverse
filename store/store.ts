import { configureStore } from '@reduxjs/toolkit';
import poolsSlice from './poolSlice';
import walletSlice from "./walletSlice"
const store = configureStore({
    reducer: {
        pools: poolsSlice,
        wallet:walletSlice

    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch