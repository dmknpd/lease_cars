import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const carsAdapter = createEntityAdapter({});

const initialState = carsAdapter.getInitialState({
  carsLoadingStatus: "idle",
  activeFilter: "all",
});

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  try {
    const response = await fetch("http://localhost:3001/cars");
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
});

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.carsLoadingStatus = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.carsLoadingStatus = "idle";
        carsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCars.rejected, (state) => {
        state.carsLoadingStatus = "error";
      });
  },
});

export const { selectAll } = carsAdapter.getSelectors((state) => state.cars);

const { actions, reducer } = carsSlice;

export default reducer;

export const { carsFetching, carsFetched, carsFetchingError } = actions;
