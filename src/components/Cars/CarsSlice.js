import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const carsAdapter = createEntityAdapter({});

const initialState = carsAdapter.getInitialState({
  carsLoadingStatus: "idle",
  carsActiveFilter: "all",
  carsDisplayCount: 4,
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
  reducers: {
    setCarFilter: (state, action) => {
      state.carsActiveFilter = action.payload;
    },
    setCarsCount: (state) => {
      state.carsDisplayCount += 4;
    },
  },
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

export const filteredCarsSelector = createSelector(
  (state) => state.cars.carsActiveFilter,
  selectAll,
  (carsActiveFilter, allCars) =>
    carsActiveFilter === "all"
      ? allCars
      : allCars.filter((car) => car.type === carsActiveFilter)
);

const { actions, reducer } = carsSlice;

export default reducer;

export const { setCarFilter, setCarsCount } = actions;
