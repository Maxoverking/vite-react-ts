import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../../types/storeStateInterface";

export const initFilterState: FilterState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initFilterState.filter,
  reducers: {
    filterAction: (_, { payload }) => payload,
  },
});
export const filterReducer = filterSlice.reducer;
export const { filterAction } = filterSlice.actions;
