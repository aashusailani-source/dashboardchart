import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/dataSlice";
import filterReducer from "../slices/filterSlice";


const store = configureStore({
    reducer: {
        data: dataReducer,
        filters: filterReducer,
    }
})

export default store;