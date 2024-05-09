import { configureStore } from "@reduxjs/toolkit";

import cars from "../Cars/CarsSlice";

const store = configureStore({
  reducer: { cars },
});

export default store;
