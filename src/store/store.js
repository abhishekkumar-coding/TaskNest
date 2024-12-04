import { configureStore } from "@reduxjs/toolkit";
import reducer from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: reducer,
  },
});

export default store;
