import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const getSchools = createAsyncThunk(
  'auth/getSchools',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/school`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'school',
  initialState: {
    schools: null,
    error: null,
    loading: true
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchools.fulfilled, (state, action) => {
        state.schools = action.payload;
        state.loading = false;
      })
      .addCase(getSchools.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getSchools.pending, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
  },
});

export default authSlice.reducer;
