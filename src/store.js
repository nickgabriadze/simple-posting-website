import { configureStore } from "@reduxjs/toolkit";
import posterReducer from './features/poster.js';

export const Store = configureStore({
    reducer: {
        postReducer: posterReducer
    }
})

export default Store;