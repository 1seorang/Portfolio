import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './apiSlice';

export default configureStore({
  reducer: {
    api: apiReducer,
  },
})

// Nentokake tipe kanggo data API
export interface ApiData {
  // Conto tipe data, sesuaikan karo struktur data API sampeyan
  [key: string]: any;
}

// Nentokake tipe kanggo state API
export interface ApiState {
  data: ApiData;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface RootState {
  api: {
    data: any; // Gantos karo tipe data sing luwih spesifik yen perlu
  };
}