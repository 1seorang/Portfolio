import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApiData, ApiState  } from './store'; // Ganti './store' karo path beneran menyang file store sampeyan

// Membuat thunk untuk melakukan fetch ke /api
export const fetchApiData = createAsyncThunk<ApiData, void, { rejectValue: string }>(
  'api/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api');
      if (!response.ok) throw new Error('Network response was not ok');
      const data: ApiData = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred');
    }
  }
);

// Membuat slice untuk data API
export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: {},
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  } as ApiState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiData.fulfilled, (state, action: PayloadAction<ApiData>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload ?? 'An unknown error occurred';
      });
  },
});

export default apiSlice.reducer;