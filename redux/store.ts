import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from './project/projectSlice';
import AuthSlice from './auth/authSilce';
export const store = configureStore({
  reducer: {
    projects: ProjectSlice,
    users: AuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
