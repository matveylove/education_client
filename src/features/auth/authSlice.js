import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';


export const register = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, age, email, password, role, schoolId }, thunkAPI) => {
    try {
      const response = await axios.post(`/auth/register`, { firstName, lastName, age, email, password, role, schoolId});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authMe = createAsyncThunk(
    'auth/authMe',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(`/auth/me`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, role }, thunkAPI) => {
    try {
      const response = await axios.post(`/auth/login`, { email, password, role });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
        console.log(state.user)
        state.user = null;
        state.token = null;
        window.localStorage.removeItem('token')
    },
    addCourse: (state, action) => {
      
      state.user.coursesNames = state.user.coursesNames + action.payload.coursesNames;
      state.user.coursesCompleted = state.user.coursesCompleted + action.payload.coursesCompleted;
      state.user.bonusPoints = state.user.bonusPoints + action.payload.bonusPoints;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(state.user)
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(authMe.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(state.user)
      })
      .addCase(authMe.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout,addCourse } = authSlice.actions;

export default authSlice.reducer;
