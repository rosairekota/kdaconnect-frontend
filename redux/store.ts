import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./project/projectSlice";

export const store = configureStore({
  reducer: {
    projects: ProjectSlice,
  },
});

