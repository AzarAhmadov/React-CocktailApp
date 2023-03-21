import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../featuers/data/DataSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
})