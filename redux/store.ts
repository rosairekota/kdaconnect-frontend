import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './project/projectSlice';

export const store = configureStore({
  reducer: {
    projects: ProjectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
