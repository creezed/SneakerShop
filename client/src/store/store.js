import { configureStore } from "@reduxjs/toolkit";

import filter from '../features/filter/filterSlice'

export const store = configureStore({
    reducer: {
        filter
    }
})