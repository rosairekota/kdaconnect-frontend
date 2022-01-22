import { registerUserAsync } from './asynchQueries';
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
const AuthSlice = createSlice({
  name: 'authSilce',
  initialState,
  reducers: {
    register: (state, { payload }: PayloadAction<IUser>) => {
      state.users.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserAsync.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    });
  },
});

export default AuthSlice.reducer;
