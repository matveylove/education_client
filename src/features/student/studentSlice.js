import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const getStudents = createAsyncThunk(
  'auth/getSchools',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/auth/all`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: null,
    error: null,
    loading: true
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getStudents.pending, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
  },
});

export default studentsSlice.reducer;
