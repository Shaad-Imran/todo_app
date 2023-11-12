import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Export the store for use in your application
export default store;
