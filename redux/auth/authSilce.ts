import { IUser } from './../../src/interfaces/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface authState {
  users: IUser[];
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string;
}

const initialState: authState = {
  users: [],
  isLoading: false,
  isAuthenticated: false,
  error: '',
};
const authSlice = createSlice({
  name: 'authSilce',
  initialState,
  reducers: {
    register: (state, { payload }: PayloadAction<IUser>) => {
      state.users.push(payload);
    },
  },
});

export default authSlice.reducer;
