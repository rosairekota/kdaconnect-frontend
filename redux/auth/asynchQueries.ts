import { apiURL } from './../../config/apiURL';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const loginUserAsync = createAsyncThunk('loginUserAsync', () => {});

export const registerUserAsync = createAsyncThunk('user/loginUserAsync', async (payload) => {
  try {
    const response = await (await apiURL.post('/users/register', payload)).data;

    if (response) {
      toast.success('Linsertion a bien reussi');
      localStorage.setItem('token', response);
      return response;
    }
  } catch (error) {
    toast.error(`une erreur innatendu est survenue${JSON.stringify(error)}`),
      {
        position: toast.POSTION.BOTTOM_RIGHT,
      };
  }
});
