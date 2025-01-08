import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    end_year: "",
    topics: "",
    region: "",
    country: "",
    pestle: "",
    sector: "",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;